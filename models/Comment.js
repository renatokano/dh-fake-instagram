module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      // PK
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      // relations - FK
      publications_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      // timestamps
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'comments'
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    Comment.belongsTo(models.Publication, {
      foreignKey: "publications_id"
    });
  };

  return Comment;
};