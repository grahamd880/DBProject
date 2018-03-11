'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer_order_shipped = sequelize.define('customer_order_shipped', {
    shipped: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }

  }, {});
  customer_order_shipped.associate = function(models) {
    // associations can be defined here
    customer_order_shipped.belongsTo(models.customer_order,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return customer_order_shipped;
};