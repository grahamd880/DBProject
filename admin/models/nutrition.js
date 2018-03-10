'use strict';
module.exports = (sequelize, DataTypes) => {
  var nutrition = sequelize.define('nutrition', {
    item_number: DataTypes.INTEGER
  }, {});
  nutrition.associate = function(models) {
    // associations can be defined here
  };
  return nutrition;
};