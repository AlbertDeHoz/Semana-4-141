const router = require('express').Router();
const userController = require('../controllers/userController.js');
const auth = require('../middlewares/auth')

//api/user
router.post('/login', userController.signin);
router.post('/add',auth.Administrador, userController.signup);
router.get('/list',auth.Administrador, userController.list)
router.put('/deactivate',auth.Administrador, userController.deactivate);
router.put('/activate',auth.Administrador, userController.activate);
router.put('/update',auth.Administrador, userController.update);

    //const user = await user.findAll();
    //res.status(200).json(user);
//api/user/login

module.exports = router;