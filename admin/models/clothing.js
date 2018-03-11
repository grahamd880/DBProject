'use strict';
module.exports = (sequelize, DataTypes) => {
  var clothing = sequelize.define('clothing', {
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.CHARACTER,
      allowNull: false
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity_in_color: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  clothing.associate = function(models) {
    // associations can be defined here
  };
  return clothing;
};