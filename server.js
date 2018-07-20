var net = require('net');
const clients = [];

// We recieve the socket in param
var server = net.createServer(function(socket) {

	console.log('A client is connected'); // Notify when a client comes in
	socket.setEncoding('UTF8');

	clients.push(socket); // Stored socket in the clients arr
	console.log(`Num of clients: ${clients.length} \n`);

		clients.forEach((client, index) => { // Pipes back information that comes in
			console.log(index);

			if(socket !== client) {
				socket.pipe(client);
			}
		});
	
	socket.on('end', function() {
			console.log('A client disconnected');
	 });
});

server.listen(3000, function() { 
   console.log('Server is listening');
});

/*
 // Listens on what is piped in and writes back to server
socket.on('data', function(data){
	console.log(data);
	socket.write("Server wrote back!");
})
*/

/*
	if(clients.length === 2) {
		clients[0].pipe(clients[1]);
		clients[1].pipe(clients[0]);
	}
*/