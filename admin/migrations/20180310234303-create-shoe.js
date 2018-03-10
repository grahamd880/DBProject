'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_number: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.CHARACTER
      },
      size: {
        type: Sequelize.FLOAT
      },
      color: {
        type: Sequelize.STRING
      },
      quantity_in_color: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('shoes');
  }
};