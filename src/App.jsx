import React from 'react'
import { Routes, Route } from "react-router-dom";
import Redirect from './pages/Authentification/Redirect';
import Register from './pages/Authentification/Register'
import Login from './pages/Authentification/Login';
import LandingPage from './pages/Creativo/Landing';
import NotFound from './pages/Exceptions/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Redirect />} />
      <Route path='/landing' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App