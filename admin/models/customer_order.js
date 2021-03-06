'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer_order = sequelize.define('customer_order', {
    cart_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    shipping_street_address: {
      type: DataTypes.STRING,
      allowNull: false
    },

    shipping_city: {
      type: DataTypes.STRING,
      allowNull: false
    },

    shipping_state: {
      type: DataTypes.STRING,
      allowNull: false
    },

    shipping_zip: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {});
  customer_order.associate = function(models) {
    // associations can be defined here
    customer_order.hasMany(models.customer_order_shipped);
  };
  return customer_order;
};