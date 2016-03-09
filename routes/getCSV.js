module.exports = function(app, bodyParser){

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

}
