var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./routes/index.js');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);

app.set('port', process.env.port || 6789);
var -
app.listen(app.get('port'), function() {
  console.log('listening on port', app.get('port'));
});
