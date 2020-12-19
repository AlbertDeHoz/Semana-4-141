const {Usuario} = require('../models/');
const bcrypt = require('bcryptjs');
const tokenServices = require('../services/token')

exports.signin = async (req, res, next) => {
    const user =  await Usuario.findOne({ where : { email: req.body.email}});  
    if (user){
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if(iguales){
            //res.json({success: createToken(user)});
            const tokenReturn = tokenServices.encode(user)
            res.send({tokenReturn,user})
        }
        else{
            res.status(401).send('Invalid Password');
        }
    }
    else{
        res.status(404).send('Usuario Not Found');
    }
    next();
}

exports.signup = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await Usuario.create(req.body);
    res.json(user);
}


exports.prueba = async (req,res) => {
    const user = await Usuario.findAll();
    res.json(user);
    
}