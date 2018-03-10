'use strict';
module.exports = (sequelize, DataTypes) => {
  var reviews = sequelize.define('reviews', {
    id: DataTypes.ITEGER,
    item_number: DataTypes.INTEGER,
    personID: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  reviews.associate = function(models) {
    // associations can be defined here
  };
  return reviews;
};