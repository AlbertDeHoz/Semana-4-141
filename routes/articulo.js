/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();
router.get('/list', articuloController.list);
router.post('/add',auth.Almacenero, articuloController.add);
router.put('/update',auth.Almacenero, articuloController.update);
router.put('/activate', auth.Almacenero,articuloController.activate);
router.put('/deactivate',auth.Almacenero, articuloController.deactivate);


router.get('/list', articuloController.list);


module.exports = router;