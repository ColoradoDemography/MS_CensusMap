//MICROSERVICE for ?

//returns ?:
/*

OLD

NEW


*/

//node modules
var express = require('express');
var app = express();
var pg = require('pg');
var conString = "postgres://codemog:demography@104.197.26.248/acs1014";


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');

    next();
}

app.use(allowCrossDomain);


app.get('/demogpost', function(req, res) {


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

function explode(delimiter, string, limit) {
  //  discuss at: http://phpjs.org/functions/explode/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //   example 1: explode(' ', 'Kevin van Zonneveld');
  //   returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}

  if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null;
  if (delimiter === '' || delimiter === false || delimiter === null) return false;
  if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string ===
    'object') {
    return {
      0: ''
    };
  }
  if (delimiter === true) delimiter = '1';

  // Here we go...
  delimiter += '';
  string += '';

  var s = string.split(delimiter);

  if (typeof limit === 'undefined') return s;

  // Support for limit
  if (limit === 0) limit = 1;

  // Positive limit
  if (limit > 0) {
    if (limit >= s.length) return s;
    return s.slice(0, limit - 1)
      .concat([s.slice(limit - 1)
        .join(delimiter)
      ]);
  }

  // Negative limit
  if (-limit >= s.length) return [];

  s.splice(s.length + limit);
  return s;
}
  
function substr(str, start, len) {
  //  discuss at: http://phpjs.org/functions/substr/
  //     version: 909.322
  // original by: Martijn Wieringa
  // bugfixed by: T.Wild
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Theriault
  //        note: Handles rare Unicode characters if 'unicode.semantics' ini (PHP6) is set to 'on'
  //   example 1: substr('abcdef', 0, -1);
  //   returns 1: 'abcde'
  //   example 2: substr(2, 0, -6);
  //   returns 2: false
  //   example 3: ini_set('unicode.semantics',  'on');
  //   example 3: substr('a\uD801\uDC00', 0, -1);
  //   returns 3: 'a'
  //   example 4: ini_set('unicode.semantics',  'on');
  //   example 4: substr('a\uD801\uDC00', 0, 2);
  //   returns 4: 'a\uD801\uDC00'
  //   example 5: ini_set('unicode.semantics',  'on');
  //   example 5: substr('a\uD801\uDC00', -1, 1);
  //   returns 5: '\uD801\uDC00'
  //   example 6: ini_set('unicode.semantics',  'on');
  //   example 6: substr('a\uD801\uDC00z\uD801\uDC00', -3, 2);
  //   returns 6: '\uD801\uDC00z'
  //   example 7: ini_set('unicode.semantics',  'on');
  //   example 7: substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
  //   returns 7: '\uD801\uDC00z'

  var i = 0,
    allBMP = true,
    es = 0,
    el = 0,
    se = 0,
    ret = '';
  str += '';
  var end = str.length;

  // BEGIN REDUNDANT
  this.php_js = this.php_js || {};
  this.php_js.ini = this.php_js.ini || {};
  // END REDUNDANT
  switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {
    case 'on':
      // Full-blown Unicode including non-Basic-Multilingual-Plane characters
      // strlen()
      for (i = 0; i < str.length; i++) {
        if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
          allBMP = false;
          break;
        }
      }

      if (!allBMP) {
        if (start < 0) {
          for (i = end - 1, es = (start += end); i >= es; i--) {
            if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
              start--;
              es--;
            }
          }
        } else {
          var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
          while ((surrogatePairs.exec(str)) != null) {
            var li = surrogatePairs.lastIndex;
            if (li - 2 < start) {
              start++;
            } else {
              break;
            }
          }
        }

        if (start >= end || start < 0) {
          return false;
        }
        if (len < 0) {
          for (i = end - 1, el = (end += len); i >= el; i--) {
            if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
              end--;
              el--;
            }
          }
          if (start > end) {
            return false;
          }
          return str.slice(start, end);
        } else {
          se = start + len;
          for (i = start; i < se; i++) {
            ret += str.charAt(i);
            if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
              se++; // Go one further, since one of the "characters" is part of a surrogate pair
            }
          }
          return ret;
        }
        break;
      }
      // Fall-through
    case 'off':
      // assumes there are no non-BMP characters;
      //    if there may be such characters, then it is best to turn it on (critical in true XHTML/XML)
    default:
      if (start < 0) {
        start += end;
      }
      end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);
      // PHP returns false if start does not fall within the string.
      // PHP returns false if the calculated end comes before the calculated start.
      // PHP returns an empty string if start and end are the same.
      // Otherwise, PHP returns the portion of the string from start to end.
      return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);
  }
  return undefined; // Please Netbeans
}
  
function implode(glue, pieces) {
  //  discuss at: http://phpjs.org/functions/implode/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Waldo Malqui Silva
  // improved by: Itsacon (http://www.itsacon.net/)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: implode(' ', ['Kevin', 'van', 'Zonneveld']);
  //   returns 1: 'Kevin van Zonneveld'
  //   example 2: implode(' ', {first:'Kevin', last: 'van Zonneveld'});
  //   returns 2: 'Kevin van Zonneveld'

  var i = '',
    retVal = '',
    tGlue = '';
  if (arguments.length === 1) {
    pieces = glue;
    glue = '';
  }
  if (typeof pieces === 'object') {
    if (Object.prototype.toString.call(pieces) === '[object Array]') {
      return pieces.join(glue);
    }
    for (i in pieces) {
      retVal += tGlue + pieces[i];
      tGlue = glue;
    }
    return retVal;
  }
  return pieces;
}  
  
function array_merge() {
  //  discuss at: http://phpjs.org/functions/array_merge/
  // original by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Nate
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //    input by: josh
  //   example 1: arr1 = {"color": "red", 0: 2, 1: 4}
  //   example 1: arr2 = {0: "a", 1: "b", "color": "green", "shape": "trapezoid", 2: 4}
  //   example 1: array_merge(arr1, arr2)
  //   returns 1: {"color": "green", 0: 2, 1: 4, 2: "a", 3: "b", "shape": "trapezoid", 4: 4}
  //   example 2: arr1 = []
  //   example 2: arr2 = {1: "data"}
  //   example 2: array_merge(arr1, arr2)
  //   returns 2: {0: "data"}

  var args = Array.prototype.slice.call(arguments),
    argl = args.length,
    arg,
    retObj = {},
    k = '',
    argil = 0,
    j = 0,
    i = 0,
    ct = 0,
    toStr = Object.prototype.toString,
    retArr = true;

  for (i = 0; i < argl; i++) {
    if (toStr.call(args[i]) !== '[object Array]') {
      retArr = false;
      break;
    }
  }

  if (retArr) {
    retArr = [];
    for (i = 0; i < argl; i++) {
      retArr = retArr.concat(args[i]);
    }
    return retArr;
  }

  for (i = 0, ct = 0; i < argl; i++) {
    arg = args[i];
    if (toStr.call(arg) === '[object Array]') {
      for (j = 0, argil = arg.length; j < argil; j++) {
        retObj[ct++] = arg[j];
      }
    } else {
      for (k in arg) {
        if (arg.hasOwnProperty(k)) {
          if (parseInt(k, 10) + '' === k) {
            retObj[ct++] = arg[k];
          } else {
            retObj[k] = arg[k];
          }
        }
      }
    }
  }
  return retObj;
}  
  
  
  
  var field = req.query.field || "undefined";
  var state = req.query.state || "undefined";  
  var county = req.query.county || "undefined";  
  var geonum = req.query.geonum || "undefined";  
  var geoid = req.query.geoid || "undefined";
  var sumlev = req.query.sumlev || "undefined";
  var table = req.query.table || "undefined";

  
 //potential single select
var type = req.query.type || 'json';
var db = req.query.db || 'acs1014';
//set default for schema if it is missing
var schema = req.query.schema ||  function(){
  if(db==='acs1014' || db==='acs0913' || db==='acs0812' || db==='c2010'){return 'data';}
  if(db==='c2000' || db==='c1990' || db==='c1980'){return 'sf1';}  
  return '';  //no valid database - will deal with later 
};


  
  var geo = req.query.geo || "undefined"; 
  var series = req.query.series || "undefined";
  var type = req.query.type || "undefined";  
  var limit = parseInt(req.query.limit,10) || 1000;  



//if database is acs, check to see if moe option is flagged
var moe='no';
if(db=='acs0812' || db=='acs0913' || db=='acs1014'){
  if (req.query.moe){
    moe=req.query.moe;
  }
} 


  //declare useful vars
  var fullarray=[]; //final data array
  var metaarrfull=[]; //final field metadata array
  var tblarrfull=[];  //final table metadata array
  var errorarray=[]; //store all errors and warnings

  //variables and arrays to use later
  var tablelist=[]; //array of all tables used in query
  var jointablelist=""; //working string of tables to be inserted into sql query
  var joinlist="";  //working string of 'where' condition to be inserted into sql query
  var arr=[];
  var arr2=[];
  var moefields=[]; //moe field array
  var tcolumns=[]; //columns gathered from table(s?)

  //get list of all parameters - check all are valid
  var getkey=[];

  //<>
  var metacsv = []; //array for csv field descriptions only
  //<>
  var ttlfields = [];
  
  
  
//push $_POST vars into simple array for each $key

  //array_push($getkey,$key);  
  
  for (var propName in req.query) {
    if (req.query.hasOwnProperty(propName)) {
        getkey.push(propName);
    }
}
  
  //loop through $keys, check against list of valid values

  for(var i=0;i<getkey.length;i++){
    
  if(getkey[i]!=='field' && getkey[i]!=='state' && getkey[i]!=='county' && getkey[i]!=='sumlev' && getkey[i]!=='place' && getkey[i]!=='geonum' && getkey[i]!=='geoid' && getkey[i]!=='db' && getkey[i]!=='schema' && getkey[i]!=='geo' && getkey[i]!=='series' && getkey[i]!=='type' && getkey[i]!=='limit' && getkey[i]!=='moe' && getkey[i]!=='table' && getkey[i]!=='type'){
    errorarray.push('Your parameter -' + getkey[i] + '- is not valid.');
  }
    
}
  
  
  //validate database selected
    if(db!=='c1980' && db!=='c1990' && db!=='c2000' && db!=='c2010' && db!=='acs0812' && db!=='acs0913' && db!=='acs1014'){
      errorarray.push('Your database choice `' + db + '` is not valid.');
      db="";
      return 'error'; //goto a;
    }

  //more validate??
  
  
  //if no fields or tables are selected
if (table==="undefined" && field==="undefined"){
  errorarray.push('You need to specify a table or fields to query.'); 
  return 'error'; //goto a;
}

  //as far as errors go, tell people they are wasting their time specifying table(s) if they specified field.
if (field!=="undefined" && table!=="undefined"){
  errorarray.push('You specified TABLE.  This parameter is ignored when you also specify FIELD');
}
  

  
  //if no fields are selected (then a table must be).  Create fields list based on the given table.
if (field==="undefined"){
  
  var atablearray = explode(",", table);

  
  var atablestr="";
  
  for (var j=0; j<atablearray.length; j++){
    atablestr = atablestr + " table_name='" + atablearray[j] + "' or";    
  }
    
    //trim last trailing 'or'
  atablestr=substr(atablestr,0,-2);
  
    //Query table fields --ONLY SINGLE TABLE SELECT AT THIS TIME--
  var tablesql = "SELECT column_name from information_schema.columns where (" + atablestr + ") and table_schema='" + schema + "';";

  field = sendinternal(tablesql, 1);  //ASYNC

  }

  
    function check() {
        if (field === undefined || field ==="undefined") {
          setTimeout(check, 10); 
        }else{
          continue_program();
        }
    }

    check();
      
  
  function continue_program(){
  // we have fields: either hand entered or derived from tables

    
  //break the comma delimited records from field into an array  
   ttlfields=explode(",", field);
    
    
   //if moe is set to yes, add the moe version of each field (push into new array, then merge with existing)
  if(moe==='yes'){

    var pos;
    
    for(var k=0;k<ttlfields.length;k++){
      //if text _moe doesn't already occur in the field name
      pos=strpos(ttlfields[k],'_moe');
      if(pos === false){
        moefields.push(substr_replace(ttlfields[k], '_moe', -3, 0));
      }
    }

    ttlfields = array_merge(ttlfields, moefields);

    //remove duplicate field names
    
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
      }
    
    ttlfields = ttlfields.filter( onlyUnique );
    

  //send moe modified field list back to main field list
  field = implode(',', ttlfields);
  }
    

    
//get a list of tables based upon characters in each field name  (convention: last 3 characters identify field number, previous characters are table name) 
    for(var m=0;m<ttlfields.length;m++){
      tablelist.push(substr(ttlfields[m],0,-3));
    }

  //remove duplicate tables in array
    tablelist = tablelist.filter( onlyUnique );
    
  //create a string to add to sql statement
    for(var n=0;n<tablelist.length;n++){
      jointablelist=jointablelist + " natural join " + schema + "." + tablelist[n];
    }

  //validate all fields exist
  
  //validate geoid
  
  //validate geonum
    

    
  //this is where field metadata is gathered
  var metafieldlist="";
  //construct 'where' statement for column_id metadata
  //iterate through all fields
    for(var p=0;p<ttlfields.length;p++){
      metafieldlist=metafieldlist + " column_id='" + ttlfields[p] + "' or";
    }
  
    //trim last trailing 'or'
    metafieldlist=substr(metafieldlist,0,-2);

  
  //Query metadata
  var metasql="SELECT column_id, column_verbose from " + schema + ".census_column_metadata where " + metafieldlist + ";";
    
  sendinternal(metasql, 2);  //ASYNC
    
    
    
}

  //LEFT OFF HERE from demogpost:
  
  //CASE 1:  you have a geonum
  
  return;
  



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

     function sendinternal(sqlstring, branch) {

        var client = new pg.Client(conString);

        client.connect(function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }

            client.query(sqlstring, function(err, result) {

                if (err) {
                    return console.error('error running query', err);
                }

                client.end();

              var tableresult = (result.rows);
              
              
              if(branch===1){
              for(var i=0;i<tableresult.length;i++){
                if(tableresult[i].column_name!=='geonum'){
                  tcolumns.push(tableresult[i].column_name);
                  }
                }
              
                field = implode(',', tcolumns); //$field becomes fields queried from info schema based upon table

                return field;
              } //end branch 1

              if(branch===2){

                var metaarr={};

                for(var k=0;k<tableresult.length;k++){
                  
                  metaarr={};
                  metaarr.column_id=tableresult[k].column_id;
                  metaarr.column_title=tableresult[k].column_verbose;

                  metaarrfull.push(metaarr);
                

                } //end k
            
                //metacsv
                for(var m=0;m<ttlfields.length;m++){
                  for(var n=0;n<metaarrfull.length;n++){
                    if(ttlfields[m]===metaarrfull[n].column_id){
                      metacsv.push(metaarrfull[n].column_title);
                    }
                  }
                }

                
  //this is where table metadata is gathered
    var tblstr="";
  //construct 'where' statement for column_id metadata
  //iterate through all fields
                for(var p=0;p<tablelist.length;p++){
                  tblstr=tblstr + " table_id='" + tablelist[p] + "' or";
                }
  
    //trim last trailing 'or'
  tblstr=substr(tblstr,0,-2);

  
  //Query metadata
  var tblsql="SELECT table_id, table_title, universe from " + schema + ".census_table_metadata where" + tblstr + ";";
                
                  sendinternal(tblsql, 3);  //ASYNC
                
              } //end branch2

              if(branch===3){

                var tblarr={};
                for(var q=0;q<tableresult.length;q++){
                  tblarr={};
                  tblarr.table_id = tableresult[q].table_id;
                  tblarr.table_title = tableresult[q].table_title;
                  tblarr.universe = tableresult[q].universe;
                  tblarrfull.push(tblarr);
                }

                branch=0; //just in case
                return;
                
              } //end branch 3
              
              return;
              
            });
        });
    } 
  
});


var server = app.listen(4000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://', host, port);
});