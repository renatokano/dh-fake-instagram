"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("comments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      create_at: Sequelize.DATE,
      update_at: Sequelize.DATE,
      publications_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "publications",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("comments");
  },
};
