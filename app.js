const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();

const  app = express();
const port = process.env.PORT || 8080;

mongoose.connect(process.env.DDBB_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

app.use( express.urlencoded({ extended: true }));
app.use( express.static( 'public' ));
app.set( 'view engine', 'ejs');

app.use(express.json());

app.use(require('./routes/index'));
app.use(require('./routes/todo'));

app.listen(port, () => console.log(`${chalk.cyan('Server run on port ')}${chalk.bgBlue(' ',port,' ')}`));
