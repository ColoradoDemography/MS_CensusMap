//MICROSERVICE for Advanced Query functionality.

//returns an array of geonum objects:
/*
http://red-meteor-147235.nitrousapp.com:4000/advsearch?advsumlev=50&advstate=6&advsign=gt&advtext=20000&advtable=b19013&advnumerator=fp.b19013001&advdenominator=1

["106049","106003","106047","106001","106005","106007","106009","106011","106013","106015","106017","106019","106021","106023","106025","106027","106029","106031","106033","106035","106037","106039","106041","106043","106045","106051","106053","106055","106057","106059","106061","106063","106065","106067","106069","106071","106073","106075","106077","106079","106081","106083","106085","106087","106089","106091","106093","106095","106097","106099","106101","106103","106105","106107","106109","106111","106113","106115"]
*/

//node modules

module.exports = function(app, pg, conString){
  
app.get('/advsearch', function(req, res) {


  var advsumlev = req.query.advsumlev || "undefined";
  var advstate = req.query.advstate || "undefined";  
  var advsign = req.query.advsign || "undefined";  
  var advtext = req.query.advtext || "undefined";  
  var advtable = req.query.advtable || "undefined";
  var advnumerator = req.query.advnumerator || "undefined";
  var advdenominator = req.query.advdenominator || "undefined";

  
  advsumlev = advsumlev.replace(/\D/g,''); //only numeric
  advstate = advstate.replace(/\D/g,''); //only numeric
  //advsign safe by domain
  advtext = advtext.replace(/[^0-9.]/g, ''); //only numeric plus decimal
  advtable = advtable.replace(/\D/g,''); //only numeric
  if(!advtable.length===5){res.send('table is not valid!');return;}
  
  makesafe(advnumerator);
  makesafe(advdenominator);
  
  function makesafe(exp){
    exp = exp.replace(/Number/g,'');
    exp = exp.replace(/[{()}]/g, '');
    exp = exp.replace(/fp.b/g,'');
    exp = exp.replace(/fp.c/g,'');
    exp = exp.replace(/\+/g, "");
    exp = exp.replace(/\-/g, "");
    exp = exp.replace(/\*/g, "");
    exp = exp.replace(/\//g, "");
    var y=exp.replace(/\D/g,'');
    if(!(exp===y)){
      res.send('input error.  sql injection protect.'); return;
    }
    console.log(exp);
  }
  
  res.send('done.'); return;
  
  
//declare useful vars
  var fullarray=[]; //final data array


//state conditional
var statecond="";
if(advstate!=='ALL'){statecond=" AND state=" + advstate;}


//join conditional
var joincond="";
if(advtable!=="undefined"){joincond="natural join data." + advtable;}
 
  
  
//greater than - less than conditional
var gtcond=">";
if(advsign){
  if(advsign=="gt"){gtcond=">";}
  if(advsign=="lt"){gtcond="<";}
  if(advsign=="gte"){gtcond=">=";}
  if(advsign=="lte"){gtcond="<=";}  
  if(advsign=="e"){gtcond="=";}
}
  

//clean numerator and denominator of 'fp.'
advnumerator = advnumerator.replace(/fp\./g, "");
advdenominator = advdenominator.replace(/fp\./g, "");

//clean numerator and denominator of 'Number'
advnumerator = advnumerator.replace(/Number/g, "");
advdenominator = advdenominator.replace(/Number/g, "");

//put it all together into the formula conditional
var formula="";
if(advtable!=="undefined"){formula=" AND ((" + advnumerator + ")/(CASE WHEN " + advdenominator + "=0 then null else " + advdenominator + " END)) " + gtcond + " " + advtext;}
  
  
  //CONSTRUCT MAIN SQL STATEMENT
// execute query
var sql = "SELECT geonum from search.data " + joincond + " where sumlev=" + advsumlev + statecond + formula + ";";

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

              
              var outputarray=[];
              
              var tableresult=result.rows;
              
              for(var i=0;i<tableresult.length;i++){
                outputarray.push(tableresult[i].geonum);
              }
              
              
              
                res.set({
                    "Content-Type": "application/json"
                });
                res.send(JSON.stringify(outputarray));

              
              

                client.end();

            });
        });
    }

});


}