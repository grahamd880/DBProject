'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('item', {
    item_number: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity_in_stock: DataTypes.INTEGER,
    model: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};