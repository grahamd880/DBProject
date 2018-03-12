'use strict';
module.exports = (sequelize, DataTypes) => {
  var shopping_cart = sequelize.define('shopping_cart', {
    cart_number: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, {});
  shopping_cart.associate = function(models) {
    // associations can be defined here
    shopping_cart.belongsTo(models.person,{
      onDelete: "CASCADE",
      foreignKey:{
        allowNull: false
      }
    })
    shopping_cart.belongsTo(models.item,{
      onDelete: "CASCADE",
      foreignKey:{
        allowNull: false
      }
    })
  };
  return shopping_cart;
};