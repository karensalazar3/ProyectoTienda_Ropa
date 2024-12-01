'use strict';
const { Model, DataTypes } = require('sequelize'); 
module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.Order, {
        through: 'OrderProduct',
        foreignKey: 'CategoryId',
        otherKey: 'OrderId'
      });
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Introduce the product name, please"
        },
        notEmpty:{
          msg: "The name field cannot be empty"
        }
      }
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Introduce your description, please"
        },
        len: {
          args: [10, 255], 
          msg: "The description must be between 10 and 255 characters"
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
    CategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      }
    }
  }, 
  {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};