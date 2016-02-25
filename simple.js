//MICROSERVICE for Simple Chart Query functionality.
//typically called twice; once for values, once for moe's
//returns :
/*
http://red-meteor-147235.nitrousapp.com:4000/simple?db=acs1014&schema=data&table=b05002_moe&geonum=108093000400

[{"geonum":"108093000400","b05002_moe001":"278","b05002_moe002":"278","b05002_moe003":"140","b05002_moe004":"254","b05002_moe005":"48","b05002_moe006":"198","b05002_moe007":"88","b05002_moe008":"103","b05002_moe009":"32","b05002_moe010":"12","b05002_moe011":"12","b05002_moe012":"32","b05002_moe013":"12","b05002_moe014":"12","b05002_moe015":"12"}]
*/

//node modules
var express = require('express');
var app = express();
var pg = require('pg');
var conString = "postgres://codemog:demography@104.197.26.248:5433/acs1014";


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');

    next();
}

app.use(allowCrossDomain);


app.get('/simple', function(req, res) {


  var db = req.query.db || "undefined";
  var schema = req.query.schema || "undefined";  
  var table = req.query.table || "undefined";  
  var geonum = req.query.geonum || "undefined";  

var fullarray=[];

var sql="SELECT * from " + schema + "." + table + " where geonum=" + geonum + ";";
  

sendtodatabase(sql);


    function sendtodatabase(sqlstring) {

        var client = new pg.Client(conString);

        client.connect(function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }

            client.query(sqlstring, function(err, result) {

                if (err) {
                    return console.error('error running query', err);
                }

             
                res.set({
                    "Content-Type": "application/json"
                });
                res.send(JSON.stringify(result.rows));
            

                client.end();

            });
        });
    }

});


var server = app.listen(4000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://', host, port);
});