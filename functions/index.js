const functions = require('firebase-functions');
const app = require('express')();
const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')
const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetails,
    updateUserDetails
} = require('./APIs/users')

const auth = require('./utils/auth');



app.post('/todo', auth, postOneTodo);
app.get('/todos', auth, getAllTodos);
app.delete('/todo/:todoId', auth, deleteTodo);
app.put('/todo/:todoId', auth, editTodo);
app.post('/signup', signUpUser);
app.post('/login', loginUser);
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetails);
app.post('/user', auth, updateUserDetails);
exports.api = functions.https.onRequest(app);
