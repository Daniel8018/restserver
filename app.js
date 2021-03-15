
require('dotenv').config();
const Server = require('./models/server');


const server = new Server();
server.listen();



// ~El app escucha en el puerto 3000
