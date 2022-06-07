const Todo = require('../models/Todo');

function todoController() {
    async function getAll( req, res ){
        const todos = await Todo.find();
        res.json(todos);                                                                                                                                 
    }
}   