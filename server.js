
var express = require('express');
var mongoose   = require('mongoose');
var https = require('https');
var http = require('http');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var jwt        = require("jsonwebtoken");


var app = express();
module.exports = {

    'secret': 'ilovescotchyscotch',


};
app.set('superSecret', 'ilovescotchyscotch'); // secret variable

// 
/*const models = join(__dirname, 'models');*/

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
require('./Controllers/room.js')(app);
require('./Controllers/items.js')(app);
require('./Controllers/month.js')(app);
require('./Controllers/User.js')(app);

/*var db = mongoose('adi', ['adi']);*/



/*mongoose.connect('mongodb://adi:adi@ds049084.mlab.com:49084/adi')*/

mongoose.connect('mongodb://localhost:27017/adi')


 console.log('Listening on port 3000...');
  app.listen(process.env.PORT || 8080);


/*const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/
/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/
/*http.createServer(app).listen(80 ,function(){
	console.log('Example app listening on port 80!');
});*/




/*s*/

/*http://code.tutsplus.com/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543*/

/*https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens*/