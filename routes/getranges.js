//MICROSERVICE for Get Ranges functionality.

//returns an array of geonum objects:
/*

*/
module.exports = function(app, pg, conString){

app.get('/getranges', function(req, res) {
  
  //PHP.js
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
    
  
  var geo = req.query.geo || "undefined";
  var num = req.query.num || "undefined";  
  var denom = req.query.denom || "undefined";  
  var discard = req.query.discard || "undefined";  
  
if (denom!=="undefined"){
  
  if(denom==='1'){denom="undefined";}else{
    var denomarray = explode(",", denom);
  }  //if was passed '1' as denom, just delete
  
} //denominator

//create numerator array
var numarray = explode(",", num);
  
var table=substr(numarray[0],0,6);
var sumlev;
  

if(geo==='bg'){sumlev=150; }
if(geo==='tract'){sumlev=140;}
if(geo==='county'){sumlev=50;} 
if(geo==='place'){sumlev=160;}
if(geo==='state'){sumlev=40;}

var darray=[];  
  

  //CONSTRUCT MAIN SQL STATEMENT
var sql = "select * from search.data natural join data." + table + " WHERE sumlev=" + sumlev + " limit 2500;";

  
  
console.log(sql);

// execute query
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

              //console.log(result.rows);
              
              
              console.log(numarray);
              console.log(denomarray);
              
              var tableresult=result.rows;
              
var numerator=0;
var denominator=0;
              
              for(var i=0;i<tableresult.length;i++){
                
 numerator=0;
denominator=0;
                
                for(var j=0;j<numarray.length;j++){
                  numerator=numerator + Number(tableresult[i][numarray[j]]);
                }


  if (denom!=="undefined"){
    
    for(var k=0;k<denomarray.length;k++){
       denominator=denominator + Number(tableresult[i][denomarray[k]]);
    }
    
  }else{denominator=1;}
  
  if(denominator===0 || denominator==="0"){denominator=1;}

  //console.log('numerator; '+numerator+' denominator: '+denominator);
  //console.log('num/denom: '+(numerator/denominator));
  
  //ifnull discard automatically
                
            
  //for truthy values
  if(numerator/denominator){
    //if discard zero is set to yes, only enter non zero values into array, otherwise, enter all values
    //truthy:
    darray.push(numerator/denominator);

  }
                
  if((numerator/denominator) === 0){
    
      if(discard==='yes'){
        if((numerator/denominator)!==0){
          darray.push(numerator/denominator);
          }
        }else{
          darray.push(numerator/denominator);
          }
    }            
                

                
                
              } //end for i
 
              
              
                res.set({
                    "Content-Type": "application/json"
                });
                res.send(JSON.stringify(darray));

              
              

                client.end();

            });
        });
    }

});


}