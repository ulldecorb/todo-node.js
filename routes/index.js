const router = require('express').Router();

router.get('/', ( req, res ) => {
    const name = 'Marley';
    const songs = [
        { song: 'redemption song', year: 1986},
        { song: 'I\'ll shoot the sheriff', year: 2000}
    ]

    res.render('index', {
        name,
        songs
    });
    console.log('route "/" is render now')
})

module.exports = router;