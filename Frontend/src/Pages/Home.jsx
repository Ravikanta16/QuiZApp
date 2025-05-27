import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
      fetchQuizes();
  }, []);
  
  const fetchQuizes = async () =>{
    try{
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/quiz/quizzes`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        }
      );
        setQuizzes(res.data);
    }
    catch(error){
      console.error('Error fetching quizes:',error)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {quizzes.map((quiz) => (
            <div key={quiz._id} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{quiz.title}</h2>
                <p className="text-gray-600 mb-4">{quiz.description}</p>
              </div>
              <Link
                to={`/quiz/${quiz._id}`}
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Start Quiz
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;