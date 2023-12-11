//MICROSERVICES for Census Map
var express = require('express');
var app = express();
var pg = require('pg');
var csv = require('csv-express');
var bodyParser = require('body-parser');
var conString = "postgres://codemog:demography@gis.dola.colorado.gov:5432/acs1822";

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');

    next();
}

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(allowCrossDomain);

require('./routes/advsearch.js')(app, pg, conString);
require('./routes/chartpost.js')(app, pg, bodyParser, conString);
require('./routes/demogpost.js')(app, pg, csv, bodyParser, conString);
require('./routes/getCSV.js')(app, bodyParser);
require('./routes/getranges.js')(app, pg, conString);
require('./routes/simple.js')(app, pg, conString);
require('./routes/getACSdb.js')(app, pg, conString);

var server = app.listen(4003, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://', host, port);
});
