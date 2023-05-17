import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import API_ROUTE from "../../routes/ApiRoute";
import EditIcon from "@mui/icons-material/Edit";
import DraggableUser from "../../components/DnD/DraggableUser";
import User from "../../components/Card/User";

const TicketsView = ({ ticket }) => {
  const [usuarios, setUsuarios] = useState([]);

  const findUser = (userID) => {
    console.log("Usersss:", usuarios);
    const matchedUser = usuarios.find((user) => user.id === userID);
    console.log("User:", matchedUser);
    return matchedUser ? matchedUser : null;
  }

  // useEffect(() => {
  //   axios
  //     .get(`${API_ROUTE}allusers/`)
  //     .then((response) => {
  //       setUsuarios(response.data);
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
    <div className="w-full h-3/5 bg-gradient-to-b from-primary to-behind-1 rounded-md flex flex-col">
      <div className="w-full p-5 h-1/5 flex">
        <div className="bg-extra h-full w-1/6 rounded-full flex items-center justify-center text-white sm:text-lg md:text-xl lg:text-4xl">
          {ticket.id}
        </div>
        <div className="ml-4">
          <p className="font-bold text-white sm:text-lg md:text-3xl lg:text-4xl">
            {ticket.empresa}
          </p>
          <p className="text-right text-white sm:text-sm md:text-sm lg:text-lg sm:mt-0 md:mt-0 lg:mt-1">
            Creado: {ticket.fecha_solicitud}
          </p>
        </div>
      </div>

      <div className="h-full mb-2 bg-gradient-to-b from-primary to-behind-1 grid grid-rows-10 grid-cols-6 gap-2">
        {/* First row */}
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-r-md">
          <BoxTitle title="Prioridad" content={ticket.prioridad} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-md">
          <BoxTitle title="Actividad" content={ticket.actividad} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-l-md">
          <BoxTitle title="Estado" content={ticket.estado} />
        </div>

        {/* Second row */}
        <div className="row-span-5 col-span-6 bg-white bg-opacity-0 flex grow items-center sm:text-xl md:text-1xl lg:text-2xl">
          <p className="px-4">"{ticket.peticion}"</p>
        </div>
        {/* <div className="row-span-5 col-span-2 flex flex-col justify-center items-center">
          <p>ENCARGADO</p>
          <Usercard/>
          <p>APOYO</p>
          <Usercard/>
        </div> */}

        {/* Third row */}
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-r-md">
          <BoxTitle title="Uso" content={ticket.uso} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-md">
          <BoxTitle title="Medio Origen" content={ticket.medio_origen} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-l-md">
          <BoxTitle title="Fecha Limite" content={ticket.fecha_limite} />
        </div>

        {/* Fourth row */}
        <div className="row-span-1 col-span-3 bg-white bg-opacity-40 rounded-r-md rounded-b-md">
          <BoxTitle title="Levanta" content={ticket.levanta_ticket} />
        </div>
        <div className="row-span-1 col-span-3 bg-white bg-opacity-40 rounded-l-md rounded-b-md">
          <BoxTitle title="Solicita" content={ticket.cliente_solicita} />
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      {/* <User usuario={findUser(ticket.encargado)} /> */}
    </div>
    </>
  );
};

const BoxTitle = (props) => {
  const [mouseOver, setMouseOver] = useState(false);
  const handleMouse = (mouse) => {
    setMouseOver(mouse);
  };
  return (
    <div
      className="w-full h-full flex flex-col text-lg"
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
    >
      <p className="px-2 pt-2 sm:text-xs md:text-sm lg:text-lg">
        {props.title}
      </p>
      <div className="flex grow  items-center justify-center font-semibold sm:text-lg md:text-xl lg:text-1xl overflow-hidden">
        {props.content}
        {mouseOver ? <EditIcon className="self-center" /> : <div/>}
      </div>
    </div>
  );
};

export default TicketsView;
