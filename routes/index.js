const routerx = require('express-promise-router');
const categoriaRouter = require('./articulo');
const router = require('express').Router();
const apiRouterUser = require('./api/user.js');
const apiRouterCategoria = require('./api/categoria');
const apiRouterArticulo = require('./api/articulo');


const router = routerx();

router.use('/articulo', articuloRouter);
router.use('/usuario',apiRouterUser);
router.use('/categoria',apiRouterCategoria);
router.use('/articulo', apiRouterArticulo);

module.exports = router;