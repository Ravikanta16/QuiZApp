import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Navbar() {
  return (
    <nav className="bg-gray-200 shadow-md px-6 py-4 flex items-center justify-between border-b-2 border-gray-300">
      <h2 className="text-2xl font-bold text-gray-900">QuizApp</h2>
      <ul className="flex space-x-6">
        <li>
          <Link to="/home" className="text-gray-700 hover:text-blue-600 text-xl font-medium transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/admin" className="text-gray-700 hover:text-blue-600 text-xl font-medium transition-colors">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
