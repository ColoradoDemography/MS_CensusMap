var request = require('request');

var data=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

request.post(
    'http://red-meteor-147235.nitrousapp.com:4000/csv',
    { json: { 
      filename: 'table.csv',
      data: data
            } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
