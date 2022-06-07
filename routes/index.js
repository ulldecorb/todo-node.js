const router = require('express').Router();
const Todo = require('../models/Todo');
const chalk = require('chalk');

router.get('/', async ( req, res ) => {
    const title = 'Todo List'
    const todos = await Todo.find();
    console.log(`Route ${chalk.blue('"/"')} is ${chalk.green('render now')}`)
    res.render('index', {
        title,
        todos
    });
})

module.exports = router;