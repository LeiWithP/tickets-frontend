import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_ROUTE from "./routes/ApiRoute";
import Redirect from "./pages/Authentification/Redirect";
import Register from "./pages/Authentification/Register";
import Login from "./pages/Authentification/Login";
import LandingPage from "./pages/General/Landing";
import NotFound from "./pages/Exceptions/NotFound";

import TicketsList from "./pages/General/Tickets";
import Inicio from "./pages/General/Inicio";
import Perfil from "./pages/General/Perfil";
import Parrillas from "./pages/General/Parrillas";
import Campanas from "./pages/General/Campanas";
import Usuarios from "./pages/General/Usuarios";
import ProtectedRoute from "./pages/Authentification/ProtectedRoute";
import DisableRoute from "./pages/Authentification/DisableRoute";
import Loading from "./pages/Authentification/Loading";

export const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem("token");
      console.log("Cargando...");
      try {
        await axios
          .get(`${API_ROUTE}user/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setUser(response.data);
          })
          .catch((error) => {
            console.warn(error);
          });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    checkAuthentication();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route
        index
        element={
          <ProtectedRoute user={user}>
            <Redirect />
          </ProtectedRoute>
        }
      />
      <Route
        path="landing"
        element={
          <ProtectedRoute user={user}>
            <LandingPage user={user}/>
          </ProtectedRoute>
        }
      >
        <Route index element={<Inicio />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="tickets" element={<TicketsList />} />
        <Route path="parrillas" element={<Parrillas />} />
        <Route path="campanas" element={<Campanas />} />
        <Route path="usuarios" element={<Usuarios />} />
      </Route>
      <Route
        path="login"
        element={
          <DisableRoute user={user}>
            <Login />
          </DisableRoute>
        }
      />
      <Route
        path="register"
        element={
          <DisableRoute user={user}>
            <Register />
          </DisableRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
