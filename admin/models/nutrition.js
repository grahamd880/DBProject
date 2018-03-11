'use strict';
module.exports = (sequelize, DataTypes) => {
  var nutrition = sequelize.define('nutrition', {
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, {});
  nutrition.associate = function(models) {
    // associations can be defined here
  };
  return nutrition;
};