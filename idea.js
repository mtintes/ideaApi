var config = require('./config');

var rp = require('request-promise-native');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// var Client = require('node-rest-client').Client;
// var client = new Client();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/ideas/', function (req, res) {

  var message = req.body.Body;

  console.log("message: " + message);

  var options = {
    method: 'POST',
    uri: 'https://api.github.com/repos/' + config.user + '/' + config.repo + '/idea/issues',
    body:  {
          title: Date.now(),
          body: message,
          labels: [
            "idea"
          ]
    },
    json: true,
    headers: {
        'Authorization': "token " + config.token, 
        "Content-Type": "application/json",
        "User-Agent": "ideaApi"
    }
  };

  rp(options).then(function(parsedBody){


  }).catch(function(err){
    console.log(err);
  });

 

});

app.listen(3012);