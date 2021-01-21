/*const express = require("express");
const Review = require("../../db").Review;
const Article = require("../../db").Article;
const { Op, Sequelize } = require("sequelize");
const router = express.Router();

router.route("/:articleId").get(async (req, res, next) => {
    try {
      const Review = await Review.findAll({
        include: [{ model: Article, include: [Category] }],
        group: ["Article.id", "Article->category.id"],
        where: { articleId: req.params.articleId },
      });
      res.send({ Articles: Review });
    } catch (e) {
      console.log(e);
      next(e);
    }
  });
  router
    .route("/:articleId/")
    .post(async (req, res, next) => {
      try {
        const newRow = await Review.create({
          articleId: req.params.articleId,
        });
        res.send(newRow);
      } catch (e) {
        console.log(e);
        next(e);
      }
    })
    .delete(async (req, res, next) => {
      try {
      } catch (e) {
        console.log(e);
        next(e);
      }
    });

module.exports = router; */