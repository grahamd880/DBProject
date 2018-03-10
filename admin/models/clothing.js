'use strict';
module.exports = (sequelize, DataTypes) => {
  var clothing = sequelize.define('clothing', {
    item_number: DataTypes.INTEGER,
    gender: DataTypes.CHARACTER,
    size: DataTypes.FLOAT,
    color: DataTypes.STRING,
    quantity_in_color: DataTypes.INTEGER
  }, {});
  clothing.associate = function(models) {
    // associations can be defined here
  };
  return clothing;
};