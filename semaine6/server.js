var http = require('http');
var fs = require('fs')
var express = require('express');
var server = require('http').createServer();

var app = express();

var io = require('socket.io').listen(server);

var clientsJson = JSON.parse(fs.readFileSync('fichierClients.json', 'utf8'));

app.use(express.static('public'));

app.get('/', function (req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content);
  });
});
app.get('/fichierClients.json', function (req, res) {
    res.setHeader('Content-Type','application/json')
    res.send(clientsJson);
  });
  app.get('/client/:client', function(req, res){
    console.log(req.params.client);
    var client = req.params.client;
    clientApp = client.split(' ');
    clientSer = clientsJson.find(client => client.nom === clientApp[0])
    console.log(clientSer);
    res.setHeader('Content-Type','application/json')
    res.send(clientSer);
  })


  app.listen(8080)
