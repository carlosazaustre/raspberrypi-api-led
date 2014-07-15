var express         = require('express');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var cons            = require('consolidate');
var swig            = require('swig');
var path            = require('path');

var app     = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(methodOverride());

app.engine('server.view.html', cons['swig']);
app.set('view engine', 'server.view.html');
app.set('views', './app/views');
app.use(express.static(path.resolve('./public')));


app.route('/')
  .get(function(req, res, next) {
    res.render('index');
  });

require('./app/controllers/leds')(app);


app.listen(3000, function() {
  console.log('Raspi Express server listening...');
});
