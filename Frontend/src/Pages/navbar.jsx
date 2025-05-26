import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-blue-600">QuizApp</h2>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
