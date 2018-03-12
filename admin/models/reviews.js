'use strict';
module.exports = (sequelize, DataTypes) => {
  var reviews = sequelize.define('reviews', {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }

  }, {});
  reviews.associate = function(models) {
    // associations can be defined here
    reviews.belongsTo(models.item,{
      onDelete: "CASCADE",
      foreignKey:{
        allowNull: false
      }
    })
    reviews.belongsTo(models.person,{
      onDelete: "CASCADE",
      foreignKey:{
        allowNull: false
      }
    })
  };
  return reviews;
};