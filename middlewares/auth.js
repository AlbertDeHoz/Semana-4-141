//Middleware de autenticacion;
const tokenService = require('../services/token');
const token = require('../services/token');
const {User} = require('../models/');


exports.checkToken = async (req, res, next) =>{
    if (!req.headers.token){
        return res.status(404).send({ error: 'Token Not Found'})
    }
    const tokenUser = req.headers.token
    const user = await token.decode(tokenUser)
    if (user.rol==='Administrador' || user.rol==='Vendedor'|| user.rol==='Almacenero' ){
        next();
    }else if(!user){
        return res.send('error, usuario no existe')
    }
    else if(user.error){
        return res.send('error, token no existe')
    }
    else{
        return res.status(403).send({message:'No autorizado'})
    }

};


exports.Administrador = async (req, res, next) =>{
    if (!req.headers.token){
        return res.status(404).send({ error: 'Token Not Found'})
    }
    const tokenUser = req.headers.token
    const user = await token.decode(tokenUser)
    if (user.rol==='Administrador'){
        next();
    }else if(!user){
        return res.send('error, usuario no existe')
    }
    else if(user.error){
        return res.send('error, token no existe')
    }
    else{
        return res.status(403).send({message:'No autorizado'})
    }

};

exports.Almacenero = async (req, res, next) =>{
    if (!req.headers.token){
        return res.status(404).send({ error: 'Token Not Found'})
    }
    const tokenUser = req.headers.token
    const user = await token.decode(tokenUser)
    if (user.rol==='Administrador'|| user.rol==='Almacenero'){
        next();
    }else if(!user){
        return res.send('error, usuario no existe')
    }
    else if(user.error){
        return res.send('error, token no existe')
    }
    else{
        return res.status(403).send({message:'No autorizado'})
    }
}  


module.exports = {
    verifyUsuario: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

}