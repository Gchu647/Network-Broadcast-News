var net = require('net');
var client = net.connect({port: 8080}, function() {
  console.log('Connected to server!'); 
  process.stdin.pipe(client);
});

client.setEncoding('UTF8');

client.on('data', function(data) { // This can only listen to what server writes back
  console.log(data);
});