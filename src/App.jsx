import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Redirect from './pages/Authentification/Redirect';
import Register from './pages/Authentification/Register'
import LandingPage from './pages/Creativo/Landing';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Redirect />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/registrarse' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App