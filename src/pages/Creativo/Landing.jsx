import React from "react";
import axios from "axios";
import { NavLink, Link, Routes, Outlet, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem("token");

    try {
      //axios.post("http://127.0.0.1:8000/api/logout/", {}, {
      axios.post(
        "https://gaytan-tickets-api.onrender.com/api/logout/",
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
        "https://gaytan-tickets-api.onrender.com/api/logoutall/",
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

  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="mt-8 text-center">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Morgan Diaz
            </h5>
            <span className="hidden text-gray-400 lg:block">Creativo</span>
          </div>
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

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="hover:scale-125">Cerrar Sesion</span>
          </button>
        </div>
      </aside>
      <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <Outlet />
      </div>
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
