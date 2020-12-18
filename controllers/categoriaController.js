const {Categoria} = require('../models/')

module.exports = {
    list : async (req,res) => {
        const categoria = await Categoria.findAll();
        res.status(200).json(categoria)
    },
    add : async (req, res) => {
        const categoria = await Categoria.create(req.body);
        res.status(200).json(categoria)
    },
    update : async (req, res) => {
        const {id} = await Categoria.findOne({where:{ id:req.body.id}})
        const categoria = await Categoria.update(req.body,{
            where:{
                id:id
            }
        })
        res.status(200).json(categoria)
    },
    activate : async (req, res) => {
        const {id} = await Categoria.findOne({where:{ nombre:req.body.nombre}})
        const categoria = await Categoria.update({estado:1},{
            where:{
                id:id
            }
        })
        res.status(200).json(categoria)
    },

    deactivate : async (req, res) => {
        const {id} = await Categoria.findOne({where:{ nombre:req.body.nombre}})
        const categoria = await Categoria.update({estado:0},{
            where:{
                id:id
            }
        })
        res.status(200).json(categoria)
    }
}