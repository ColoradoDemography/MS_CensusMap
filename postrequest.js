var request = require('request');

request.post(
    'http://red-meteor-147235.nitrousapp.com:4000/demogpost',
    { json: { 
      db: 'acs1014',
      schema: 'data',
      table: 'b19013',
      moe: 'yes',
      geonum: '108037,108039'
            } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
