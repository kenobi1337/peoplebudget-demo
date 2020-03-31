const securityQuestion = require("../models/securityQuestion");

const router = require("express").Router();

const { hash } = require("../helpers/hash");
const { customValidator } = require("../helpers/validator");
const { alreadyExists } = require("../helpers/database");
const { ClientError, ServerError } = require("../helpers/error");
const pagination = require("../helpers/pagination");

let results;

// Client -> API -> Databaese
router.post("/", async (req, res, next) => {
  console.log(req.body.question);
  results = await securityQuestion.create({
    question: req.body.question
  });
});

// Client <- API <- Databaese
router.get("/", async (req, res, next) => {
  //let results;
  try {
    if (req.query.hasOwnProperty("id")) {
      results = await securityQuestion.findOne({
        where: { id: req.query.id },
        attributes: { exclude: ["createdAt", "updatedAt"] }
      });
    }
    if (!results) {
      next(new ClientError(400, `id ${req.query.id} doesn't exist`));
    }
    res.send({ response: results });
  } catch (error) {
    next(error);
  }
});
router.put(   "/", async (req, res, next) => {
    console.log(req.body.securityquestion);
    results = await securityQuestion.update(
        {question: req.body.securityquestion},
        {
            where: { id: req.body.id }
        }
    );
    res.send("hello");
});
router.delete("/", async (req, res, next) => {

});

module.exports = { router, version: 1 };
