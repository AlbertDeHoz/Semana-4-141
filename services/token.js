const jwt = require('jsonwebtoken')
const {Usuario} = require('../models/')
const tokenKey = require('../secret/config')

module.exports ={
    encode: (user) =>{
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            rol: user.rol
        },tokenKey.secret,{
            expiresIn: 60*60*24
        });
        return token
    },
    decode: async (token)=>{
        try{
            const {id} = jwt.verify(token,tokenKey.secret)
            const user = await Usuario.findOne({
                where:{
                    id:id,
                }
            })
            if (user){
                return user            
            }else{
                return false
            }

        }catch(error){
            return {error:'token aqui'}
        }

        

    }
/*    decode: (Usuario)=>{
        try{
            const token = req.headers['user-token'];
            const {id} = jwt.verify(token,tokenKey);
            const user = models.Usuario.findOne({where:{
              id:id
            }});
            if(user){
                return user;
            }else{
                return false;
            }
        }catch(error){
            //const newToken = checkToken(token);
            return 'error'
        }
    }*/
}