import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);


  useEffect(() => {
    fetchQuizes();
  }, []);
  
  const fetchQuizes = async () =>{
    try{
      console.log(id);
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/quiz/quizzes/${id}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });

      setQuiz(res.data);
    }
    catch(error){
      console.error('Error fetching quizes:',error)
    }
  };

  if (!quiz) return <p>Loading quiz...</p>;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  function handleAnswer(option) {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: option }));
    setSelectedOption(option);
  }

  function handleNext(){
    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      navigate("/result", { state: { quiz, answers } });
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Quiz #{quiz.title}</h1>

        <div>
          <p className="mb-1">{currentQuestion.question}</p>
            <ul>
              {currentQuestion.options.map((option, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left px-4 py-2 rounded mb-2 border 
                      ${selectedOption === option 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white hover:bg-gray-100'}`}
                  >
                    {idx+1}) {option}
                  </button>
                
                </li>
                
              ))}
            </ul>
            <button onClick={()=>handleNext()}
            className="border text-white bg-green-600 p-1 rounded-md">Next</button>
          <p className="mt-1">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
        </div>
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default Quiz;
