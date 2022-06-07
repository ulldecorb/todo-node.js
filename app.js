const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const  app = express();
const port = process.env.PORT || 8080;

mongoose.connect(process.env.DDBB_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use( express.static( 'public' ));
app.set( 'view engine', 'ejs');


app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use(require('./routes/todo'));


app.get('/',  ( req, res ) => {
    res.send('helo')

    // const products = await res.json(res.body.products);
    // res.send(products)
})

app.listen(port, () => console.log(`Server run on port ${port}`));