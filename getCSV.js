var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/csv', function (req, res) {
  

//&& req.body.filename
  var filename = req.body.filename || 'codemogexport.csv';
  
  if(req.body.csv_text){

  var csv = req.body.csv_text; // Not including for example.

    //newline character: %0A
    //served data should be URI encoded

  res.setHeader('Content-disposition', 'attachment; filename='+filename);
  res.set('Content-Type', 'text/csv');
  res.status(200).send(csv);
    
  }else{
    res.send("missing data");
    return;
  }

  
  
});




var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});