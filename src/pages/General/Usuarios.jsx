import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import API_ROUTE from "../../routes/ApiRoute";
import UserTable from "../../components/Tables/UsersTable";
import HeaderTable from "../../components/Tables/HeaderTable";

const Usuarios = () => {
  //const { tickets } = useContext(CreativoContext);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ROUTE}allusers/`)
      .then((response) => {
        setUsuarios(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <HeaderTable tablename="Tickets"/>
      <div>
        <UserTable usuarios={usuarios}/>
      </div>
    </div>
  );
};

export default Usuarios;
