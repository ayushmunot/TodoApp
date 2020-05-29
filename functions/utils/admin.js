const admin = require('firebase-admin');
var serviceAccount = require("../../../../auth/todoapp-926d1-firebase-adminsdk-v9sp7-ecacf346ac.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://todoapp-926d1.firebaseio.com",
    storageBucket: "todoapp-926d1.appspot.com"
  });
const db = admin.firestore();
module.exports = {admin, db};

