const { Sequelize, DataTypes } = require("sequelize");
const Category = require("./category");
const Article = require("./article");
//const Review = require("./review");

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect:"postgres",
    }
);
const models = {
    Category: Category(sequelize, DataTypes),
    Article: Article(sequelize, DataTypes)
   // Reviews: Review(sequelize, DataTypes)
};
Object.keys(models).forEach((modelName) => {
    if("associate" in models[modelName]) {
        models[modelName].associate(models)
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
.authenticate()
.then(() => console.log("Connected!"))
.catch((e) => console.log("Connection failed ", e));

module.exports = models