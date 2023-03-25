import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";

const Redirect = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    try {
      axios.get("http://127.0.0.1:8000/api/user/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }

    //console.log(user)
    //if (user) navigate('/landing')
    //else navigate('/login')
  }, []);
  //console.log(user)
  if (!user) {
    return <Login/>;
    //return navigate('/login')
    //return <Navigate to="/login"/>;
  }

  return <Navigate to="/landing"/>
  //return navigate('/landing')
};

export default Redirect;
