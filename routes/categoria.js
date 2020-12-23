const router = require('express').Router();
const categoriaController = require('../controllers/categoriaController');
const auth = require('../middlewares/auth')



router.get('/list' ,categoriaController.list);
router.post('/add',auth.Almacenero, categoriaController.add);
router.put('/update',auth.Almacenero, categoriaController.update);
router.put('/activate',auth.Almacenero, categoriaController.activate);
router.put('/deactivate',auth.Almacenero, categoriaController.deactivate);


module.exports = router;
