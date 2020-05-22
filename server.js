const http = require('http');  // import http package
const app = require('./app')   // import app

const port = 8080;

// create the server and add listener function.
const server = http.createServer(app);

// adding listening port.
server.listen(port);
