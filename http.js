var http = require('http');

var options = {

  hostname: 'www.google.com',

  path: '/',

  port: '80',

  method: 'POST'

};

var req = http.request(options, function(response){

  var str = ''

  response.on('data', function (chunk) {

    str += chunk;

  });
  response.on('end', function () {

      console.log(str);

    });

  });
 req.end();  
  