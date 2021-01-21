module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        headline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Article.associate = (models) => {
        Article.belongsTo(models.Category)
        //Article.hasMany(models.Review)
    };
    return Article;
};