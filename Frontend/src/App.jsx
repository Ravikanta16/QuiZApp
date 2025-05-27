import React from 'react';
import { Route, Routes,Router } from 'react-router-dom';
import UserLogin from './Pages/userLogin';
import UserSignUp from './Pages/userSignUp'; 
import Navbar from './Pages/navbar';
import Home from './Pages/Home';
import Quiz from './Pages/quiz';
import Result from './Pages/result';
import CreateQuiz from './Pages/createQuiz';
import AdminHome from './Pages/adminHome';
import UserProtectedWrapper from './Pages/userProtectedWrapper';
import Start from './Pages/Start';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={ 
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path="/admin" element={ 
          <UserProtectedWrapper>
            <AdminHome />
          </UserProtectedWrapper>
        } />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
};

export default App;