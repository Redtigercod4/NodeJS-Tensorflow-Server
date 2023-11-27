const { WebSocketServer } = require("ws");
const http = require("http");
const { v4: uuidv4 } = require('uuid');

const server = new http.createServer();
const wsServer = new WebSocketServer({ server });

server.listen(3000, () => {
    console.log(`This is a Websocket Server on port: ${3000}`)
});

const clients = {};

wsServer.on('connection', function (connection) {
    const connectionId = uuidv4();

    clients[connectionId] = connection;
    console.log(`New connection ${connectionId}`);
});