// traemos express
const express = require('express');



// el cors lo que hace es restringir el api para otras paginas
const cors = require('cors');


//  Inicializamos express en la variable app.
const app = express();


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // middlewares siempre se ejecutan cuando levantemos el servidor
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        this.app.use(cors());

        // lectura y parseo del body 
        // agarra todo lo que venga
        // y lo parsea a JSON
        this.app.use(express.json());

        // use es para saber que es un middleware
        // desde aca servimos la carpeta public como principal
        this.app.use(express.static('public'));
    }

    // esto configura las rutas del app al ser creado
    routes() {

            // cuando pase la solicitud por esta ruta, va a cargar ... routes....user
            // usuarios path es /api/usuarios
        this.app.use(this.usuariosPath,require('../routes/usuarios-routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor Corriendo en el puerto', this.port);
        });
    }



}




module.exports = Server;