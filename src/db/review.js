module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define(
      "Review",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      },
      {
        timestamps: false,
      }
    );
  
    Review.associate = (models) => {
      Review.hasMany(models.Article);
    };
    return Review;
  };