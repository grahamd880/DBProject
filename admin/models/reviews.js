'use strict';
module.exports = (sequelize, DataTypes) => {
  var reviews = sequelize.define('reviews', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    personID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }

  }, {});
  reviews.associate = function(models) {
    // associations can be defined here
  };
  return reviews;
};