const quizModel = require("../models/quiz.model");

const createQuiz = async (req, res) => {
    try {   
        const { title, description, timeLimit, questions} = req.body;
        const user = req.user;
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        const newQuiz = new quizModel({title, description, timeLimit, questions});
        await newQuiz.save();

        res.status(201).json({ message: "Quiz added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "quiz creation failed" });
    }
};

const getQuizes = async (req, res) => {
  const quizes = await quizModel.find();
  res.status(200).json(quizes);
};

const getQuiz = async (req, res) => {
  const {id} = req.params;
  const quiz = await quizModel.findById(id);
  res.status(200).json(quiz);
};

module.exports = {createQuiz, getQuizes, getQuiz};
