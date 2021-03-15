const { Router } = require('express');
const { 
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

} = require('../controllers/usuarios-controller');




const router = Router();

// no se necesita poner /api porque la ruta la estamos especificando en el objeto server
router.get('/', usuariosGet);

// ese id lo parsea y lo mete en una variable del request
router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', (req, res) => {
    res.status(403).json({
        msg: 'delete a la aplicacion'
    });
});

module.exports = router;