const router = require('express').Router();
const categoriaController = require('../../controller/categoriaController')
const auth = require('../../middleware/auth')


router.get('/list',auth.Almacenero,categoriaController.list);
router.post('/add',auth.Almacenero,categoriaController.add);
router.put('/update',auth.Almacenero,categoriaController.update);
router.put('/activate',auth.Administrador,categoriaController.activate);
router.put('/deactivate',auth.Administrador,categoriaController.deactivate);


module.exports = router;