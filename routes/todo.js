const router = require('express').Router();
const Todo = require('../models/Todo');
const chalk = require('chalk');

router.post('/add/todo', async ( req, res ) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo});

    newTodo.save()
    .then(() => {
        console.log(`${chalk.blue(`${todo}`)} added ${chalk.green('Successfully')}`);
        res.redirect('/');
    })
    .catch((err) => console.log(chalk.red(`${err}`)));
})

.get('delete/todo/:_id', async ( req, res ) => {
    const {_id } = req.params;
    Todo.deleteOne({ _id })
        .then(() => {
            console.log(chalk.yellow('Deleted Todo Successfully'));
            res.redirect('/');
        })
        .catch((err) => console.log(chalk.red(`${err}`)))
});

module.exports = router;