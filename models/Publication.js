module.exports = (sequelize, DataTypes) => {
  const Publication = sequelize.define(
    "Publication",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: DataTypes.STRING,
      like: DataTypes.INTEGER,
      users_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'publications'
    }
  );

  Publication.associate = (models) => {
    Publication.belongsTo(models.User, {
      foreignKey: "users_id"
    });
    Publication.hasMany(models.Comment, {
      foreignKey: "publications_id"
    });
  };

  return Publication;
};