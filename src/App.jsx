import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Redirect from './pages/Authentification/Redirect';
import Register from './pages/Authentification/Register'
import LandingPage from './pages/Creativo/Landing';
import NotFound from './pages/Exceptions/NotFound';

export const App = () => {
  return (
    //<BrowserRouter>
    <Routes>
      <Route path='/' element={<Redirect />} />
      <Route path='/landing' element={<LandingPage />} />
      <Route path='/registrarse' element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    //</BrowserRouter>
  )
}

export default App