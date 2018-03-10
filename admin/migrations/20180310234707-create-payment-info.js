'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payment_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personID: {
        type: Sequelize.INTEGER
      },
      card_number: {
        type: Sequelize.STRING
      },
      billing_street_address: {
        type: Sequelize.STRING
      },
      billing_city: {
        type: Sequelize.STRING
      },
      billing_state: {
        type: Sequelize.STRING
      },
      billing_zip: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      middleName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('payment_infos');
  }
};