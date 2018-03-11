'use strict';
module.exports = (sequelize, DataTypes) => {
  var shoe = sequelize.define('shoe', {
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    gender: {
      type: DataTypes.STRING,
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
  shoe.associate = function(models) {
    // associations can be defined here
  };
  return shoe;
};