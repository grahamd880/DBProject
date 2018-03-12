'use strict';
module.exports = (sequelize, DataTypes) => {
  var shoe = sequelize.define('shoe', {
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
    shoe.belongsTo(models.item,{
      onDelete: "CASCADE",
      foreignKey:{
        allowNull: false
      }
    })
    
  };
  return shoe;
};