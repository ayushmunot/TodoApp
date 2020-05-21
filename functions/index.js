const functions = require('firebase-functions');
const app = require('express')();
const {
    getAllTodos,
    postOneTodo
} = require('./APIs/todos')
app.post('/todo', postOneTodo);
app.get('/todos', getAllTodos);
exports.api = functions.https.onRequest(app);
