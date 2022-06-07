const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({

    todo: {
        type: String,
        required: true
        
    }
});

moodule.exports = new mongoose.model( 'Todo', TodoSchema)