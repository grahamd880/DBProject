'use strict';
module.exports = (sequelize, DataTypes) => {
  var nutrition = sequelize.define('nutrition', {
  }, {});
  nutrition.associate = function(models) {
    // associations can be defined here

    nutrition.belongsTo(models.item,{
      foreignKey:{
        allowNull: false
      }
    })
  };
  return nutrition;
};