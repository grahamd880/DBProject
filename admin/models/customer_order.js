'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer_order = sequelize.define('customer_order', {
    order_number: DataTypes.INTEGER,
    cart_number: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    shipping_street_address: DataTypes.STRING,
    shipping_city: DataTypes.STRING,
    shipping_state: DataTypes.STRING,
    shipping_zip: DataTypes.STRING
  }, {});
  customer_order.associate = function(models) {
    // associations can be defined here
  };
  return customer_order;
};