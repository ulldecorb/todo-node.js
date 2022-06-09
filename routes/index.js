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

router.get('/delete/:_id', async ( req, res ) => {
    const {_id } = req.params;
    
    await Todo.remove({ _id })
        .then(() => {
            console.log(chalk.yellow('Deleted Todo Successfully'));
            res.redirect('/');
        })
        .catch((err) => console.log(chalk.cyan(`${err}`)));
});

router.get('/update/:_id', async ( req, res ) => {
    const  { todo }  = req.query;
    const {_id } = req.params;
    // console.log('todo: ', req.query.todo);
    // const todo =  'ara no' ;

    await Todo.findByIdAndUpdate(
             {_id },
             { $set: { todo }},
             {new: true}
         )
         .then(() => {
            console.log(chalk.yellow(`Update ${todo} Successfully`));
             res.redirect('/');
         })
        .catch(( err ) => console.log(chalk.cyan(`${err}`))); 
});

module.exports = router;