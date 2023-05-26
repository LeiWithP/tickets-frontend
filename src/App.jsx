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

import Tickets from "./pages/General/Tickets";
import Empresas from "./pages/General/Empresas";
import Inicio from "./pages/General/Inicio";
import Perfil from "./pages/General/Perfil";
import Parrillas from "./pages/General/Parrillas";
import Campanas from "./pages/General/Campanas";
import Usuarios from "./pages/General/Usuarios";
import ProtectedRoute from "./pages/Authentification/ProtectedRoute";
import DisableRoute from "./pages/Authentification/DisableRoute";
import Loading from "./pages/Authentification/Loading";

import { getTickets } from "./Routes/ApiModels";
import {
  getPrioridades,
  getEstados,
  getActividades,
  getUsos,
  getDias,
  getMediosOrigen,
  getErrores,
  getTiposError,
} from "./Routes/ApiCatalogos";

export const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [prioridades, setPrioridades] = useState([]);
  const [estados, setEstados] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [usos, setUsos] = useState([]);
  const [dias, setDias] = useState([]);
  const [mediosOrigen, setMediosOrigen] = useState([]);
  const [errores, setErrores] = useState([]);
  const [tiposError, setTiposError] = useState([]);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem("token");
      //console.log("Cargando...");
      try {
        await axios
          .get(`${API_ROUTE}user/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((response) => {
            //console.log(response.data);
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
    const fetchTickets = async () => {
      try {
        const t = await getTickets();
        setTickets(t);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchPrioridades = async () => {
      try {
        const p = await getPrioridades();
        setPrioridades(p);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchEstados = async () => {
      try {
        const es = await getEstados();
        setEstados(es);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchActividades = async () => {
      try {
        const ac = await getActividades();
        setActividades(ac);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchUsos = async () => {
      try {
        const u = await getUsos();
        setUsos(u);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchDias = async () => {
      try {
        const d = await getDias();
        setDias(d);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchMediosOrigen = async () => {
      try {
        const mo = await getMediosOrigen();
        setMediosOrigen(mo);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchErrores = async () => {
      try {
        const er = await getErrores();
        setErrores(er);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchTiposError = async () => {
      try {
        const te = await getTiposError();
        setTiposError(te);
      } catch (e) {
        console.error(e);
      }
    };
    fetchTickets();
    fetchPrioridades();
    fetchEstados();
    fetchActividades();
    fetchUsos();
    fetchDias();
    fetchMediosOrigen();
    fetchErrores();
    fetchTiposError();
    checkAuthentication();
    //console.log(tickets);
    //console.log(prioridades);
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
            <LandingPage user={user} />
          </ProtectedRoute>
        }
      >
        <Route index element={<Inicio />} />
        <Route path="inicio" element={<Inicio />} />
        <Route
          path="perfil"
          element={<Perfil user={user} inittickets={tickets} height="screen" />}
        />
        <Route
          path="tickets"
          element={
            <Tickets
              inittickets={tickets}
              catalogos={[
                prioridades,
                estados,
                actividades,
                usos,
                dias,
                mediosOrigen,
                errores,
                tiposError,
              ]}
            />
          }
        />
        <Route path="parrillas" element={<Parrillas />} />
        <Route path="empresas" element={<Empresas 
        
        />} />
        <Route path="campanas" element={<Campanas />} />
        <Route path="usuarios" element={<Usuarios inittickets={tickets} />} />
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
