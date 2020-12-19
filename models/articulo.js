'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD
      // define association here
=======
      this.belongsTo(models.Categoria, { foreignKey: 'categoriaId', as: 'categoria'})
>>>>>>> origin
    }
  };
  Articulo.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
<<<<<<< HEAD
    descripcion: DataTypes.STRING,
    estado: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER
=======
      descripcion: DataTypes.STRING,
      estado: DataTypes.INTEGER,
      categoriaId: DataTypes.INTEGER
>>>>>>> origin
  }, {
    sequelize,
    modelName: 'Articulo',
  });
  return Articulo;
};