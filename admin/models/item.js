'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('item', {
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    quantity_in_stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    model: {
      type: DataTypes.STRING,
      allowNull: false
    },

    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {});
  item.associate = function(models) {
    // associations can be defined here

    item.hasMany(models.shoe);
    item.hasMany(models.clothing);
    item.hasMany(models.watch);
    item.hasMany(models.nutrition); 
    item.hasMany(models.reviews);
    item.hasMany(models.shopping_cart);
  };
  return item;
};