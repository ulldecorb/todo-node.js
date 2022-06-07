const router = require('express').Router();
const chalk = require('chalk');

router.get('/', ( req, res ) => {
    const name = 'Marley';
    const songs = [
        { song: 'redemption song', year: 1986},
        { song: 'I\'ll shoot the sheriff', year: 2000}
    ]

    console.log(`Route ${chalk.blue('"/"')} is ${chalk.green('render now')}`)
    res.render('index', {
        name,
        songs
    });
})

module.exports = router;