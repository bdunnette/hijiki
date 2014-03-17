var Hapi = require('hapi'),
    git = require('nodegit');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 3000);

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {

        reply('hello world');
    }
});

// Start the server
server.start();
