const app = require('./app.js');

app.listne(app.get('port'), () => {
  console.log('App running on Port ', app.get('port')
);
});
