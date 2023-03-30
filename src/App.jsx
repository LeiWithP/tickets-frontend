import React from 'react'
import { Routes, Route } from "react-router-dom";
import Redirect from './pages/Authentification/Redirect';
import Register from './pages/Authentification/Register'
import Login from './pages/Authentification/Login';
import LandingPage from './pages/Creativo/Landing';
import NotFound from './pages/Exceptions/NotFound';

import TicketsList from "./pages/Creativo/Tickets";
import Inicio from "./pages/Creativo/Inicio";
import Parrillas from "./pages/Creativo/Parrillas";

export const App = () => {
  return (
    <Routes>
      <Route index element={<Redirect />} />
      <Route path='landing' element={<LandingPage />} >
        <Route index element={<Inicio />} />
        <Route path='inicio' element={<Inicio />} />
        <Route path='parrillas' element={<Parrillas />} />
        <Route path='tickets' element={<TicketsList />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App