'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category)
      Product.belongsToMany(models.Order, {
        through: 'OrderProduct',
        foreignKey: 'ProductId',
        otherKey: 'OrderId'
      });
    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Introduce your name, please"
        }
      }
    },
    price: {
      type:DataTypes.DECIMAL,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Introduce the price, please"
        }
      }
    },
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};