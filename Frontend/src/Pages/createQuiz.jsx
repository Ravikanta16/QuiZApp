import React, {useState } from "react";
import axios from 'axios';

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timeLimit, setTimeLimit] = useState(10);
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], answer: '' }
  ]);
  const [message, setMessage] = useState('');

  const handleQuestionChange = (idx, field, value) => {
    const updated = [...questions];
    if (field === 'question' || field === 'answer') {
      updated[idx][field] = value;
    } else {
      updated[idx].options[field] = value;
    }
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
  };

  const removeQuestion = (idx) => {
    setQuestions(questions.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    const quizData = { 
        title:title, 
        description:description,
        timeLimit:timeLimit,
        questions:questions 
    };

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/quiz/quizzes`,
      quizData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
    
    if (res.status===201) {
      const data=res.data;
      setMessage('Quiz created successfully!');
    }

    setTitle('');
    setDescription('');
    setTimeLimit(10);
    setQuestions([{ question: '', options: ['', '', '', ''], answer: '' }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Create Quiz</h1>
        {message && <div className="mb-4 text-green-600">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Title</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              className="w-full border px-3 py-2 rounded"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Time Limit (minutes)</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded"
              value={timeLimit}
              onChange={e => setTimeLimit(Number(e.target.value))}
              min={1}
              required
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Questions</h2>
            {questions.map((q, idx) => (
              <div key={idx} className="mb-6 border p-4 rounded">
                <div className="mb-2 flex justify-between items-center">
                  <label className="font-medium">Question {idx + 1}</label>
                  {questions.length > 1 && (
                    <button
                      type="button"
                      className="text-red-600"
                      onClick={() => removeQuestion(idx)}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  className="w-full border px-3 py-2 rounded mb-2"
                  placeholder="Enter question"
                  value={q.question}
                  onChange={e => handleQuestionChange(idx, 'question', e.target.value)}
                  required
                />
                <div className="mb-2">
                  <label className="block font-medium mb-1">Options</label>
                  {q.options.map((opt, oIdx) => (
                    <input
                      key={oIdx}
                      className="w-full border px-3 py-2 rounded mb-1"
                      placeholder={`Option ${oIdx + 1}`}
                      value={opt}
                      onChange={e => handleQuestionChange(idx, oIdx, e.target.value)}
                      required
                    />
                  ))}
                </div>
                <div>
                  <label className="block font-medium mb-1">Correct Answer</label>
                  <input
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Enter correct answer (must match one option)"
                    value={q.answer}
                    onChange={e => handleQuestionChange(idx, 'answer', e.target.value)}
                    required
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={addQuestion}
            >
              Add Question
            </button>
          </div>
          <button
            type="submit"
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition font-medium"
          >
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;