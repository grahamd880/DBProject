'use strict';
module.exports = (sequelize, DataTypes) => {
  var watch = sequelize.define('watch', {
    item_number: DataTypes.INTEGER,
    gender: DataTypes.CHARACTER,
    color: DataTypes.STRING,
    quantity_in_color: DataTypes.INTEGER
  }, {});
  watch.associate = function(models) {
    // associations can be defined here
  };
  return watch;
};