// the core of the nodejs app uses expressjs and some middlewares
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const controller = require('./controller/index');
const helpers = require('./views/helpers/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'hbs');

app.engine(
  'hbs',
  exports({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helpers
  })
);

app.set('port', process.env.PORT || 4000);
app.use(controller);

module.exports = app;
