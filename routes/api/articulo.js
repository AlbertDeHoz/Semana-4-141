const router = require('express').Router();
const articuloController = require('../../controller/articuloController');
const auth= require('../../middleware/auth')

router.get('/list',auth.Almacenero,articuloController.list);
router.post('/add',auth.Almacenero,articuloController.add);
router.put('/update',auth.Almacenero,articuloController.update);
router.put('/activate',auth.Administrador,articuloController.activate);
router.put('/deactivate', auth.Administrador,articuloController.deactivate);



module.exports = router