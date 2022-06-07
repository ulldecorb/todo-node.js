const router = require('express').Router();

router.get('/', ( req, res ) => {
    console.log(req)
    res.send('Welcome');
})

module.exports = router;