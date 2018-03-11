'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payment_infos', {
      personID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      card_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      billing_street_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      billing_city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      billing_state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      billing_zip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      middleName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lastName: {
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
    return queryInterface.dropTable('payment_infos');
  }
};