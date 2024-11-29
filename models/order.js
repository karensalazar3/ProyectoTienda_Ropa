'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Product, {
        through: 'OrderProduct',
        foreignKey: 'OrderId',
        otherKey: 'ProductId'
      });
      

      Order.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'user',
      });
    }
  }
  Order.init({
    description: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};