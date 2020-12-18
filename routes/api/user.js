const router = require('express').Router();
const userController = require('../../controller/userController.js');
const auth = require('../../middleware/auth')

//api/user
router.post('/login',userController.signin);
router.post('/signup',userController.signup);
router.get('/',auth.checkToken, userController.prueba)

    //const user = await user.findAll();
    //res.status(200).json(user);
//api/user/login

module.exports = router;