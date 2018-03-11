'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customer_orders', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cart_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shipping_street_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shipping_city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shipping_state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shipping_zip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customer_orders');
  }
};