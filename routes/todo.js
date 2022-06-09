const router = require('express').Router();
const Todo = require('../models/Todo');
const chalk = require('chalk');

router.post('/add/todo', async ( req, res ) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo});

    await newTodo.save()
    .then(() => {
        console.log(`${chalk.blue(`${todo}`)} added ${chalk.green('Successfully')}`);
        res.redirect('/');
    })
    .catch((err) => console.log(chalk.red(`${err}`)));
});

module.exports = router;