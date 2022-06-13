const Todo = require('../models/Todo');

function todoController() {

    async function getAll( req, res ){
        const title = 'Todo List'
        const todos = await Todo.find();
        console.log(`Route ${chalk.blue('"/"')} is ${chalk.green('render now')}`)
        res.render('index', {
            title,
            todos
        });                                                                                                                               
    }

    return {
        getAll
    }
}

module.exports = todoController;