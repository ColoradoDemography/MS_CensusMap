// SELECT datname FROM pg_database WHERE datistemplate = false AND LEFT(datname,3) = 'acs';

var sendtodatabase = require("../modules/common_functions.js").sendtodatabase;


module.exports = function(app, pg, conString){

app.get('/getdb', function(req, res) {

sendtodatabase("SELECT datname FROM pg_database WHERE datistemplate = false AND LEFT(datname,3) = 'acs';", pg, conString, res);
  
});


}

