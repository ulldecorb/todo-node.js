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
});

router.get('/:_id', async ( req, res ) => {
    const {_id } = req.params;
    console.log('_id: ', _id)
    await Todo.remove({ _id })
        .then(() => {
            console.log(chalk.yellow('Deleted Todo Successfully'));
            res.redirect('/');
        })
        .catch((err) => console.log(chalk.cyan(`${err}`)))
});

module.exports = router;