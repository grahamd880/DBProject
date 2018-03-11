'use strict';
module.exports = (sequelize, DataTypes) => {
  var shopping_cart = sequelize.define('shopping_cart', {
    cart_number: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

    personId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, {});
  shopping_cart.associate = function(models) {
    // associations can be defined here
  };
  return shopping_cart;
};