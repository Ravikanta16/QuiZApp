const express = require("express");
const router = express.Router();
const {authUser,isAdmin} =require("../middlewares/authMiddleware");
const { createQuiz,getQuizes,getQuiz} = require("../handlers/quiz.handler");

router.post("/quizzes",authUser, isAdmin, createQuiz);
router.get("/quizzes", authUser, getQuizes);
router.get("/quizzes/:id", authUser, getQuiz);

module.exports = router;

// router.post('/quizzes', authUser, isAdmin, async (req, res) => {
//   const quiz = new quizModel(req.body);
//   await quiz.save();
//   res.json(quiz);
// });

// router.get('/', authUser, async (req, res) => {
//   const quizzes = await quizModel.find();
//   res.json(quizzes);
// });

// router.get('/:id', authUser, async (req, res) => {
//   const quiz = await quizModel.findById(req.params.id);
//   res.json(quiz);
// });

