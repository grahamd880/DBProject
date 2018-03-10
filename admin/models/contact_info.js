'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact_info = sequelize.define('contact_info', {
    id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  contact_info.associate = function(models) {
    // associations can be defined here
  };
  return contact_info;
};