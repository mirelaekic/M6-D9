const express = require("express");
require("dotenv").config();

// Articles router
const articlesRouter = require("./services/articles");
// Authors router
// const authorsRouter = require("./services/authors");
// Reviews router
//const reviewsRouter = require("./services/reviews");
// Categories router
// const categoriesRouter = require("./services/categories");

const db = require("./db");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/articles",articlesRouter);
//server.use("/authors",authorsRouter);
//server.use("/reviews",reviewsRouter);
//server.use("/categories",categoriesRouter);

db.sequelize.sync({force:false}).then((result) => {
    server.listen(process.env.PORT || 3010, () => {
        console.log("server running on", process.env.PORT || 3010)
    })
});
