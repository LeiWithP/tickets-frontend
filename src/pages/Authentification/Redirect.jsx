import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_ROUTE from "../../routes/ApiRoute";

const Redirect = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const getToken = async () => {
      const token = localStorage.getItem("token");
      console.log("Cargando...")
      try {
        //axios.get(`${API_ROUTE}exist/`, {
        await axios.get(`${API_ROUTE}user/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((response) => {
            console.log("Nice")
            setUser(response.data);
            navigate('/landing')
          })
          .catch((error) => {
            console.warn(error);
            navigate('/login')
          });
      } catch (error) {
        console.log(error);
      }
    }
    getToken()
    //console.log(user)
    //if (user) navigate('/landing')
    //else navigate('/login')
  }, []);
  //console.log(user)
  // if (!user) {
  //   return <Login/>;
  // }

  // return <Navigate to="/landing"/>
  //return navigate('/landing')
  return (
    <Loading/>
    //<h1>Cargando</h1>
  )
};

const Loading = () => {
  return(
    <div className="flex h-screen w-full items-center justify-center bg-random-image bg-cover bg-no-repeat">
            <div className="flex justify-center rounded-xl bg-tertiary bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="flex-grow-0 w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"/>
              <p className="ml-2">cargando...</p>
            </div>
    </div>
  )
}

export default Redirect;
