/*MICROSERVICE for Multi-Geo Chart functionality.

Returns :
http://red-meteor-147235.nitrousapp.com:4000/chartpost?db=acs1014&schema=data&table=b19013&geonum=108093,108059,108035,108119&numerator=fp.b19013001&denominator=1

[{"State":"Douglas CO","result":"102626.000000000000","moe":"1592.0000000000000000"},
{"State":"Jefferson CO","result":"69698.000000000000","moe":"878.0000000000000000"},
{"State":"Park CO","result":"60800.000000000000","moe":"4938.0000000000000000"},
{"State":"Teller CO","result":"62559.000000000000","moe":"3881.0000000000000000"}]

---

OLD
[{"State":"Colorado","result":"59448.000000000000","moe":"312.0000000000000000"}]
NEW
[{"geoname":"Colorado","firstvar":"59448.000000000000","secondvar":"312.0000000000000000"}]

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

/* ########## POST ###################### */
app.get('/chartpost', function(req, res) {

  

//PHP.js
function strpos(haystack, needle, offset) {
  //  discuss at: http://phpjs.org/functions/strpos/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Daniel Esteban
  //   example 1: strpos('Kevin van Zonneveld', 'e', 5);
  //   returns 1: 14

  var i = (haystack + '')
    .indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}

function str_replace(search, replace, subject, count) {
  //  discuss at: http://phpjs.org/functions/str_replace/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Gabriel Paderni
  // improved by: Philip Peterson
  // improved by: Simon Willison (http://simonwillison.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // bugfixed by: Anton Ongson
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Oleg Eremeev
  //    input by: Onno Marsman
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Oleg Eremeev
  //        note: The count parameter must be passed as a string in order
  //        note: to find a global variable in which the result will be given
  //   example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
  //   returns 1: 'Kevin.van.Zonneveld'
  //   example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
  //   returns 2: 'hemmo, mars'

  var i = 0,
    j = 0,
    temp = '',
    repl = '',
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]';
  s = [].concat(s);
  if (count) {
    this.window[count] = 0;
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
      s[i] = (temp)
        .split(f[j])
        .join(repl);
      if (count && s[i] !== temp) {
        this.window[count] += (temp.length - s[i].length) / f[j].length;
      }
    }
  }
  return sa ? s : s[0];
}  
  
function substr_replace(str, replace, start, length) {
  //  discuss at: http://phpjs.org/functions/substr_replace/
  // original by: Brett Zamir (http://brett-zamir.me)

  if (start < 0) { // start position in str
    start = start + str.length;
  }
  length = length !== undefined ? length : str.length;
  if (length < 0) {
    length = length + str.length - start;
  }

  return str.slice(0, start) + replace.substr(0, length) + replace.slice(length) + str.slice(start + length);
}  

//lookup
function stateabbrev(name){
    name = str_replace("County, Alabama", "AL", name);
    name = str_replace("County, Alaska", "AK", name);
    name = str_replace("County, Arizona", "AZ", name);
    name = str_replace("County, Arkansas", "AR", name);
    name = str_replace("County, California", "CA", name);
    name = str_replace("County, Colorado", "CO", name);
    name = str_replace("County, Connecticut", "CT", name);
    name = str_replace("County, Delaware", "DE", name);
    name = str_replace(", District of Columbia", " DC", name);
    name = str_replace("County, Florida", "FL", name);
    name = str_replace("County, Georgia", "GA", name);
    name = str_replace("County, Hawaii", "HI", name);
    name = str_replace("County, Idaho", "ID", name);
    name = str_replace("County, Illinois", "IL", name);
    name = str_replace("County, Indiana", "IN", name);
    name = str_replace("County, Iowa", "IA", name);
    name = str_replace("County, Kansas", "KS", name);
    name = str_replace("County, Kentucky", "KY", name);
    name = str_replace("Parish, Louisiana", "LA", name);
    name = str_replace("County, Maine", "ME", name);
    name = str_replace("County, Maryland", "MD", name);
    name = str_replace("County, Massachusetts", "MA", name);
    name = str_replace("County, Michigan", "MI", name);
    name = str_replace("County, Minnesota", "MN", name);
    name = str_replace("County, Mississippi", "MS", name);
    name = str_replace("County, Missouri", "MO", name);
    name = str_replace("County, Montana", "MT", name);
    name = str_replace("County, Nebraska", "NE", name);
    name = str_replace("County, Nevada", "NV", name);
    name = str_replace("County, New Hampshire", "NH", name);
    name = str_replace("County, New Jersey", "NJ", name);
    name = str_replace("County, New Mexico", "NM", name);
    name = str_replace("County, New York", "NY", name);
    name = str_replace("County, North Carolina", "NC", name);
    name = str_replace("County, North Dakota", "ND", name);
    name = str_replace("County, Ohio", "OH", name);
    name = str_replace("County, Oklahoma", "OK", name);
    name = str_replace("County, Oregon", "OR", name);
    name = str_replace("County, Pennsylvania", "PA", name);
    name = str_replace("County, Rhode Island", "RI", name);
    name = str_replace("County, South Carolina", "SC", name);
    name = str_replace("County, South Dakota", "SD", name);
    name = str_replace("County, Tennessee", "TN", name);
    name = str_replace("County, Texas", "TX", name);
    name = str_replace("County, Utah", "UT", name);
    name = str_replace("County, Vermont", "VT", name);
    name = str_replace("County, Virginia", "VA", name);
    name = str_replace("County, Washington", "WA", name);
    name = str_replace("County, West Virginia", "WV", name);
    name = str_replace("County, Wisconsin", "WI", name);
    name = str_replace("County, Wyoming", "WY", name);

    name = str_replace(", Alabama", ", AL", name);
    name = str_replace(", Alaska", ", AK", name);
    name = str_replace(", Arizona", ", AZ", name);
    name = str_replace(", Arkansas", ", AR", name);
    name = str_replace(", California", ", CA", name);
    name = str_replace(", Colorado", ", CO", name);
    name = str_replace(", Connecticut", ", CT", name);
    name = str_replace(", Delaware", ", DE", name);
    name = str_replace(", Florida", ", FL", name);
    name = str_replace(", Georgia", ", GA", name);
    name = str_replace(", Hawaii", ", HI", name);
    name = str_replace(", Idaho", ", ID", name);
    name = str_replace(", Illinois", ", IL", name);
    name = str_replace(", Indiana", ", IN", name);
    name = str_replace(", Iowa", ", IA", name);
    name = str_replace(", Kansas", ", KS", name);
    name = str_replace(", Kentucky", ", KY", name);
    name = str_replace(", Louisiana", ", LA", name);
    name = str_replace(", Maine", ", ME", name);
    name = str_replace(", Maryland", ", MD", name);
    name = str_replace(", Massachusetts", ", MA", name);
    name = str_replace(", Michigan", ", MI", name);
    name = str_replace(", Minnesota", ", MN", name);
    name = str_replace(", Mississippi", ", MS", name);
    name = str_replace(", Missouri", ", MO", name);
    name = str_replace(", Montana", ", MT", name);
    name = str_replace(", Nebraska", ", NE", name);
    name = str_replace(", Nevada", ", NV", name);
    name = str_replace(", New Hampshire", ", NH", name);
    name = str_replace(", New Jersey", ", NJ", name);
    name = str_replace(", New Mexico", ", NM", name);
    name = str_replace(", New York", ", NY", name);
    name = str_replace(", North Carolina", ", NC", name);
    name = str_replace(", North Dakota", ", ND", name);
    name = str_replace(", Ohio", ", OH", name);
    name = str_replace(", Oklahoma", ", OK", name);
    name = str_replace(", Oregon", ", OR", name);
    name = str_replace(", Pennsylvania", ", PA", name);
    name = str_replace(", Rhode Island", ", RI", name);
    name = str_replace(", South Carolina", ", SC", name);
    name = str_replace(", South Dakota", ", SD", name);
    name = str_replace(", Tennessee", ", TN", name);
    name = str_replace(", Texas", ", TX", name);
    name = str_replace(", Utah", ", UT", name);
    name = str_replace(", Vermont", ", VT", name);
    name = str_replace(", Virginia", ", VA", name);
    name = str_replace(", Washington", ", WA", name);
    name = str_replace(", West Virginia", ", WV", name);
    name = str_replace(", Wisconsin", ", WI", name);
    name = str_replace(", Wyoming", ", WY", name);
  
    name = str_replace("Census Tract", "", name);  
    name = str_replace("Block Group", "", name);    
  
  return name;
}  
  
 
  var geonum = req.query.geonum || "undefined";
  var table = req.query.table || "undefined";  
  var numerator = req.query.numerator || "undefined";  
  var denominator = req.query.denominator || "undefined";  


//declare useful vars
var fullarray=[]; //final data array
  
//create moe table name using regular table name
var moetable = substr_replace(table, "_moe", 6, 0);

//turn geonums into a where statement
geonum = " WHERE geonum=" + geonum.replace(/,/g, " OR geonum=");

//create join tables statement (search.data, table, table_moe)
var joinstatement = "FROM search.data_exp NATURAL JOIN data." + table + " NATURAL JOIN data." + moetable;  
  

//remove fp. from all variables
numerator = numerator.replace(/fp\./g, "");
denominator = denominator.replace(/fp\./g, "");

//remove Number() from all variables
numerator = numerator.replace(/Number/g, "");
denominator = denominator.replace(/Number/g, "");

//select first statement
var selectfirst = "SELECT geoname, ((" + numerator + ")/(" + denominator + ")) as firstvar, ";
  


//select second statement
//$selectsecond = " (".$moenumerator."/".$moedenominator.") as secondvar ";

var moenum=numerator;
var moeden=denominator;
//add _moe to each var

//search for $moenum for $table
//replace each instance with $moetable
moenum = str_replace(table, moetable, moenum);
moeden = str_replace(table, moetable, moeden);


  
//MOEnum
//find if contains +
if (strpos(moenum, '+') !== false){
  //yes
  moenum = str_replace("+", "^2 + ", moenum);
  //add ^2 to end
  moenum = moenum + "^2";
  //sqrt everything
  moenum = "Math.sqrt(" + moenum + ") ";
}else{
  //nothing needs to be done
  
}


//MOEden
if (strpos(moeden, '+') !== false){
  //yes
  moeden = str_replace("+", "^2 + ", moeden);
  //add ^2 to end
  moeden = moeden + "^2";
  //sqrt everything
  moeden = "Math.sqrt (" + moeden + ") ";
}else{
  //nothing needs to be done
}
  
  

//situations
//Denominator is 1 - simple MOE
//Denominator not equal to 1 - derived ratio
var selectsecond;
    
if(denominator=="1"){
  selectsecond = " (" + moenum + "/" + moeden + ") as secondvar ";
}else{
  //derived ratio
  selectsecond = " ((sqrt(((" + moenum + ")^2)+((((" + numerator + ")/" + denominator + ")^2)*((" + moeden + ")^2))))/" + denominator + ") as secondvar ";
}  
  


//create entire sql statement
var sql = selectfirst + selectsecond + joinstatement + geonum + ";";

  
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

              
              var tableresult=result.rows;
              var outputarray=[];
              var tempobject={};
              
              for(var i=0;i<tableresult.length;i++){
                tempobject={};
                tempobject.State=stateabbrev(tableresult[i].geoname);
                tempobject.result=tableresult[i].firstvar;
                tempobject.moe=tableresult[i].secondvar;
                outputarray.push(tempobject);
                
              }
              /*
              [{"State":"Douglas CO","result":"102626.000000000000","moe":"1592.0000000000000000"},
{"State":"Jefferson CO","result":"69698.000000000000","moe":"878.0000000000000000"},
{"State":"Park CO","result":"60800.000000000000","moe":"4938.0000000000000000"},
{"State":"Teller CO","result":"62559.000000000000","moe":"3881.0000000000000000"}]
NEW
[{"geoname":"Douglas County, Colorado","firstvar":"102626.000000000000","secondvar":"1592.0000000000000000"},
{"geoname":"Jefferson County, Colorado","firstvar":"69698.000000000000","secondvar":"878.0000000000000000"},
{"geoname":"Park County, Colorado","firstvar":"60800.000000000000","secondvar":"4938.0000000000000000"},
{"geoname":"Teller County, Colorado","firstvar":"62559.000000000000","secondvar":"3881.0000000000000000"}]
              */
                res.set({
                    "Content-Type": "application/json"
                });
                res.send(JSON.stringify(outputarray));


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