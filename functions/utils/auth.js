const { admin, db } = require('./admin');

module.exports = (request, response, next) => {
    let idToken;
    if (request.headers['authorization'] && request.headers['authorization'].startsWith('Bearer')) {
        idToken = request.headers['authorization'].split(' ')[1].trim();
    } else {
        console.error('No token found');
        return response.status(403).json({error: 'Unauthorized'});
    }
    admin
        .auth().verifyIdToken(idToken)
        .then((decodedToken) => {   
            request.user = decodedToken;
            console.log(request.user);
            console.log(request.user.uid);
            return db.collection('users').where('userId', '==', request.user.uid).limit(1).get()
        })
        .then((data) => {
            console.log(data);
            console.log(data.docs);
            request.user.username = data.docs[0].data().username;
            request.user.imageurl = data.docs[0].data().imageUrl;
            return next();
        })
        .catch((err) => {
            console.error('Error while verifying token', err);
            return response.status(403).json(err);
        });
};