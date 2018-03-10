'use strict';
module.exports = (sequelize, DataTypes) => {
  var shopping_cart = sequelize.define('shopping_cart', {
    cart_number: DataTypes.INTEGER,
    personID: DataTypes.INTEGER,
    item_number: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  shopping_cart.associate = function(models) {
    // associations can be defined here
  };
  return shopping_cart;
};