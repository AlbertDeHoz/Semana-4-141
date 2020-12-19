const routerx = require('express-promise-router');
const articuloRouter = require('./articulo');
const categoriaRouter = require('./categoria');
const userRouter = require('./usuario')



const router = routerx();

router.use('/articulo', articuloRouter);
router.use('/categoria',categoriaRouter);
router.use('/usuario',userRouter);

module.exports = router;