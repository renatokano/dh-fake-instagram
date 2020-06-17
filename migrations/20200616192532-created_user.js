module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      password: Sequelize.STRING,
      username: Sequelize.STRING,
      avatar: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      create_at: Sequelize.DATE,
      update_at: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
