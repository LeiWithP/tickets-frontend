import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem("token");

    try {
      //axios.post("http://127.0.0.1:8000/api/logout/", {}, {
      axios.post("https://gaytan-tickets-api.onrender.com/api/logout/", {}, {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
      localStorage.removeItem("token");
      console.log("Logged Out successfully!");
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogoutAll = () => {
    const token = localStorage.getItem("token");

    try {
      //axios.post("http://127.0.0.1:8000/api/logoutall/", {}, {
      axios.post("https://gaytan-tickets-api.onrender.com/api/logoutall/", {}, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      localStorage.removeItem("token");
      console.log("Logged All Out successfully!");
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My CRUD App</h1>
      <p className="text-xl text-gray-600 mb-8">Welcome to my CRUD app!</p>
      <div className="flex space-x-4">
        <Button onClick={handleLogoutAll} className="bg-blue-500 hover:bg-blue-600 text-white">
          Logout All
        </Button>
        <Button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-600 text-white">
          Logout
        </Button>
        <Link to="/update">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Update
          </Button>
        </Link>
        <Link to="/delete">
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Delete
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
