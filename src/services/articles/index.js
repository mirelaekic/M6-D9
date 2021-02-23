const express = require("express");
const Article = require("../../db").Article;
const Category = require("../../db").Category;
const { Op } = require("sequelize");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const data = await Article.findAll({
            include: {
                model: Category,
                where: req.query.category ? { name: { [Op.iLike]: "%" + req.query.category + "%" }} : {},
            },
            where: req.query.name ?  { name: { [Op.iLike]: "%" + req.query.name + "%" }} : {},
            offset:parseInt(req.query.offset) | 0,
            limit: parseInt(req.query.limit) | 10,
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        next(error);
    }
})
.post(async (req, res, next) => {
    try {
        const newArticle = await Article.create(req.body);
        res.send(newArticle)
    } catch (error) {
        console.log(error);
        next(error)
    }
});

router.route("/:id").get(async (req, res, next) => {
    try {
        const data = await Article.findByPk(req.params.id);
        res.send(data);
    } catch (error) {
        console.log(error);
        next(error);
    }
})
.put(async (req, res, next) => {
    try {
        const update = await Article.update(req.body, {
            returning: true,
            plain: true,
            where: {
                id: req.params.id,
            },
        });
        res.send(update[1])
    } catch (error) {
        console.log(error);
        next(error)
    }
})
.delete(async (req, res, next) => {
    try {
        Article.destroy({ where: { id: req.params.id }}).then((rowsDeleted) => {
            if (rowsDeleted > 0) res.send("Deleted") 
            else res.send("not found");
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
});

module.exports = router; 