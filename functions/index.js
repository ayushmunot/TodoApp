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
    uploadProfilePhoto
} = require('./APIs/users')

const auth = require('./utils/auth');



app.post('/todo', postOneTodo);
app.get('/todos', getAllTodos);
app.delete('/todo/:todoId', deleteTodo);
app.put('/todo/:todoId', editTodo);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);



app.post('/login', loginUser);
exports.api = functions.https.onRequest(app);
