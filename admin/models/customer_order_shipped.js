'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer_order_shipped = sequelize.define('customer_order_shipped', {
    order_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    shipped: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }

  }, {});
  customer_order_shipped.associate = function(models) {
    // associations can be defined here
  };
  return customer_order_shipped;
};