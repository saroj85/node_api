const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const hourly_route = require('./routes/hourly')


// * MiddleWares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));


app.use('/hourly', hourly_route);


module.exports = app;