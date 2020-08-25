var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routes = require('./routes/index');

var path = require('path');

var app = express();
app.enable('trust proxy')

app.use('/', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});