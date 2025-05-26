const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  options: {
    type: [String],
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

const quizSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  description: {
    type:String,
    required:true
  },
  timeLimit:{
    type: Number,
    required: true
  },
  questions: {
    type: [questionSchema],
    required: true
  }
});

const quizModel = mongoose.model("Quiz", quizSchema);

module.exports = quizModel;
