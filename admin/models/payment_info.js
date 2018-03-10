'use strict';
module.exports = (sequelize, DataTypes) => {
  var payment_info = sequelize.define('payment_info', {
    personID: DataTypes.INTEGER,
    card_number: DataTypes.STRING,
    billing_street_address: DataTypes.STRING,
    billing_city: DataTypes.STRING,
    billing_state: DataTypes.STRING,
    billing_zip: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  payment_info.associate = function(models) {
    // associations can be defined here
  };
  return payment_info;
};