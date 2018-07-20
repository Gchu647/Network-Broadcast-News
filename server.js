var net = require('net');
const clients = [];

// We recieve the socket in param
var server = net.createServer(function(connection) {

	console.log('A client is connected'); // Notify when a client comes in
	connection.setEncoding('UTF8');

	clients.push(connection); // Stored connection in the clients arr
	console.log("Num of clients: ", clients.length);

	clients.forEach((client) => {
		if(client === connection) {
			client.on('data', function(data){
				console.log(data);
			})
		}
	});

	// -------------------------------------------
	
	connection.on('end', function() {
			console.log('5) clients disconnected');
	 });
});

server.listen(8080, function() { 
   console.log('1) server is listening');
});

/*
 // Listens on what is piped in and writes back to server
connection.on('data', function(data){
	console.log(data);
	connection.write("Server wrote back!");
})
*/

/*
	if(clients.length === 2) {
		clients[0].pipe(clients[1]);
		clients[1].pipe(clients[0]);
	}
*/