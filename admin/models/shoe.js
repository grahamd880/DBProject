'use strict';
module.exports = (sequelize, DataTypes) => {
  var shoe = sequelize.define('shoe', {
    item_number: DataTypes.INTEGER,
    gender: DataTypes.CHARACTER,
    size: DataTypes.FLOAT,
    color: DataTypes.STRING,
    quantity_in_color: DataTypes.INTEGER
  }, {});
  shoe.associate = function(models) {
    // associations can be defined here
  };
  return shoe;
};