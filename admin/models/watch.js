'use strict';
module.exports = (sequelize, DataTypes) => {
  var watch = sequelize.define('watch', {
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    gender: {
      type: DataTypes.STRING,
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
  watch.associate = function(models) {
    // associations can be defined here
    watch.belongsTo(models.item,{
      onDelete: "CASCADE",
      foreignKey:{
        allowNull: false
      }
    })
  };
  return watch;
};