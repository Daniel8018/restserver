const { response } = require('express');


const usuariosGet = (req, res) => {


    const { q, nombre='no name', apikey } = req.query;
 

    res.json({
        msg: 'get a la aplicacion',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => {

    const { id } = req.params.id;


    res.status(403).json({
        msg: 'put a la aplicacion',
        id
    });
}


const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    

    res.status(403).json({
        msg: 'post a la aplicacion',
        nombre,
        edad
    });
}

const usuariosDelete =  (req, res) => {
    res.status(403).json({
        msg: 'delete a la aplicacion'
    });
}



module.exports = {

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}