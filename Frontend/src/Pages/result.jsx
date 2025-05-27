import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/home");
    return null;
  }

  const { quiz, answers } = location.state;

  let score = 0;
  quiz.questions.forEach((q, idx) => {
    if (answers[idx] === q.answer) {
      score++;
    }
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-4xl text-green-700 mb-3">Quiz Result</h2>
      <p className="text-xl font-medium mb-6">Your score: {score} / {quiz.questions.length}</p>
      <button className="border text-white bg-black text-xl p-2 rounded-lg" onClick={() => navigate("/")}> Back</button>
    </div>
  );
}

export default Result;
