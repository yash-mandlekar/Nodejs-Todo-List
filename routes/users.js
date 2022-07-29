const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');

const todoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    image: String
});

module.exports = mongoose.model('todo', todoSchema);