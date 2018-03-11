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
      foreignKey:{
        allowNull: false
      }
    })
    reviews.belongsTo(models.person,{
      foreignKey:{
        allowNull: false
      }
    })
  };
  return reviews;
};