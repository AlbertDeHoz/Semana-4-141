//Middleware de autenticacion;
const tokenService = require('../services/token');
//const {Usuario} = require('../models/');


exports.Vendedor = async (req, res, next) =>{
    if (!req.headers.token){
        return res.status(404).send({ error: 'Token Not Found'})
    }
    const tokenUsuario = req.headers.token
    const user = await tokenService.decode(tokenUsuario)
    if (user.rol === 'Almacenero' || user.rol === 'Administrador' || user.rol === 'Vendedor'){
        next()
    }else{
        res.status(403).send({error:'usuario no autorizado'})
    }
};


exports.Administrador = async (req, res, next) =>{
    if (!req.headers.token){
        return res.status(404).send({ error: 'Token Not Found'})
    }
    const tokenUsuario = req.headers.token
    const user = await tokenService.decode(tokenUsuario)
    if (user.rol==='Administrador'){
        next();
    }else if(!user){
        return res.status(401).send('error, usuario no existe')
    }else if(user.error){
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
    const tokenUsuario = req.headers.token
    const user = await tokenService.decode(tokenUsuario)
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
/*
module.exports = {
    verifyUsuario: async(req, res, next) => {
        if (!req.headers.tokenService) {
            return res.status(404).send({
                message: 'No tokenService'
            });
        }
        const response = await tokenService.decode(req.headers.tokenService);
        if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

}
*/