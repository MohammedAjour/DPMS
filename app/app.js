// the core of the nodejs app uses expressjs and some middlewares
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const AuthCookies = require('./helpers/Middlewares/cookieAuth.js');
const errorHandler = require('./helpers/Middlewares/serverError.js');
const controller = require('./controller/index.js');
const helpers = require('./views/helpers/index');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helpers
  })
);
app.use(AuthCookies);
app.set('port', process.env.PORT || 5000);
app.use(controller);
app.use(errorHandler);

module.exports = app;
