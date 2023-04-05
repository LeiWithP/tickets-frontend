import React from "react";
import axios from "axios";
import { NavLink, Link, Routes, Outlet, useNavigate } from "react-router-dom";
import API_ROUTE from "../../routes/ApiRoute";
import MainLayout from "../../layouts/Dashboard/MainLayout";
import Layout2 from "../../layouts/Dashboard/Layoutv2";

const LandingPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem("token");

    try {
      //axios.post("http://127.0.0.1:8000/api/logout/", {}, {
      axios.post(
        `${API_ROUTE}logout/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      console.log("Logged Out successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogoutAll = () => {
    const token = localStorage.getItem("token");

    try {
      //axios.post("http://127.0.0.1:8000/api/logoutall/", {}, {
      axios.post(
        `${API_ROUTE}logoutall/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      console.log("Logged All Out successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const Left = () => {
    return (
      <>
        <div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <SideButton dir="inicio" text="Inicio" />
            </li>
            <li>
              <SideButton dir="tickets" text="Tickets" />
            </li>
            <li>
              <SideButton dir="parrillas" text="Parrillas" />
            </li>
            <li>
              <SideButton dir="campanas" text="Campañas" />
            </li>
          </ul>
        </div>
      </>
    );
  };
  // <MainLayout left={Left} />
  //<Layout2/>
  return (
    <>
      <Layout2
        left={Left}
      />
    </>
  );
};

const SideButton = (props) => {
  return (
    <NavLink
      to={props.dir}
      className={({ isActive }) =>
        isActive
          ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-secondary to-primary"
          : "relative px-4 py-3 flex items-center space-x-4 rounded-xl"
      }
    >
      <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
          className="fill-current text-cyan-400 dark:fill-slate-600"
        ></path>
        <path
          d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
          className="fill-current text-cyan-200 group-hover:text-cyan-300"
        ></path>
        <path
          d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
          className="fill-current group-hover:text-sky-300"
        ></path>
      </svg>
      <span className="hover:scale-125 -mr-1 font-medium">{props.text}</span>
    </NavLink>
  );
};

export default LandingPage;
