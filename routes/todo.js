const router = require('express').Router();
const Todo = require('../models/Todo');
const chalk = require('chalk');

router.post('/add/todo', async ( req, res ) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo});

    newTodo.save().then(() => {
        console.log(`${chalk.blue('Todo')} added ${chalk.green('Successfully')}`);
        res.redirect('/');
    })
})

module.exports = router;