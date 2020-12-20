const {Articulo} = require('../models/');
const {Categoria} = require('../models/');

const list = async (req,res)=> {
    const articulo = await Articulo.findAll({
        include:{
            model: Categoria,
            as:'categoria',
            required: true,
            atributes:['nombre']
        }
    });
    res.status(200).send(articulo)
}
const add = async (req, res) => {
    const articulo = await Articulo.create(req.body);
    res.status(200).json(articulo)
}
const update = async (req, res) => {
    const {id} = await Articulo.findOne({where:{ id:req.body.id}})
    const articulo = await Articulo.update(req.body,{
        where:{
            id:id
        }
    })
    res.status(200).json(articulo)
}
const activate = async (req, res) => {
    const {id} = await Articulo.findOne({where:{ id:req.body.id}})
    const articulo = await Articulo.update({estado:1},{
        where:{
            id:id
        }
    })
    res.status(200).json(articulo)
}

const deactivate = async (req, res) => {
    const {id} = await Articulo.findOne({where:{ id:req.body.id}})
    const articulo = await Articulo.update({estado:0},{
        where:{
            id:id
        }
    })
    res.status(200).json(articulo)
}

module.exports = {
    list,
    add,
    update,
    activate,
    deactivate
}