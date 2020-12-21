const {Usuario} = require('../models/');
const bcrypt = require('bcryptjs');
const tokenServices = require('../services/token')

exports.signin = async (req, res, next) => {
    const user =  await Usuario.findOne({ where : { email: req.body.email}});  
    if (user){
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if(iguales){
            //res.json({success: createToken(user)});
            const tokenReturn = tokenServices.encode(user);
            res.status(200).json({tokenReturn});
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
    res.status(200).json(user);
}


exports.list = async (req,res) => {
    const user = await Usuario.findAll();
    res.status(200).json(user);
    
}
exports.deactivate = async (req,res) =>{
    let user = await Usuario.findOne({where:{id:req.body.id}})
    await Usuario.update({estado:0},{
        where:{
            id:user.id
        }
    })
    user = await Usuario.findOne({where:{id:req.body.id}})
    res.status(200).send(user)
}
exports.activate = async (req,res) =>{
    let user = await Usuario.findOne({where:{id:req.body.id}});
    await Usuario.update({estado:1},{
        where:{
            id:user.id
        }
    })
    user = await Usuario.findOne({where:{id:req.body.id}})
    res.status(200).send(user)
}
exports.update = async (req,res) =>{
    const user = await Usuario.findOne({where:{id:req.body.id}})
    await Usuario.update(req.body,{
        where:{
            id:user.id
        }
    })
    res.status(200).send(user)
}