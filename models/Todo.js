const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({

    todo: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = new mongoose.model( 'Todo', TodoSchema)