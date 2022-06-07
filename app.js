const express = require('express');
const { use } = require('express/lib/application');
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
app-use(express.urlencoded({ extended: true }));
app.use( express.static( 'public' ));
app.set( 'view engine', 'ejs');


app.use(express.json());

// routes

app.get('/', async ( req, res ) => {
    console.log(await req.body)
    // const products = await res.json(res.body.products);
    // res.send(products)
})

app.listen(8080, () => console.log('Server run on port 8080'));