import React, { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableUser from "../../components/DnD/DraggableUser";
import API_ROUTE from "../../routes/ApiRoute";
import { tareasIniciales } from "../../Data/TestData";
import TwoColSwitch from "../../layouts/TwoColSwitch";
import { reorder } from "../../components/DnD/Management";
import TicketsView from "../Views/TicketsView";
import UserTable from "../../components/Tables/UsersTable";

const Usuarios = () => {
  const [activeUser, setActiveUser] = useState();
  const [activeTicket, setActiveTicket] = useState();
  const [activeButton, setActiveButton] = useState();

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ROUTE}allusers/`)
      .then((response) => {
        setUsuarios(response.data);
        //console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCardClick = (buttonId, object) => {
    setActiveButton(buttonId);
    buttonId === "usuario"
      ? setActiveTicket(object)
      : buttonId === "usuario"
      ? setActiveUser(object)
      : console.log("Id unknow");
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!result.destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    if (result.destination.droppableId === "usuarios")
      setUsuarios((prevTickets) =>
        reorder(prevTickets, source.index, destination.index)
      );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TwoColSwitch
        name="Usuarios"
        leftChild={
          <>
            <h2 className="m-2 text-center font-bold">Usuarios</h2>
            <div>
              <Droppable droppableId="usuarios">
                {(droppableProvided) => (
                  <ul
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                    className="flex flex-col"
                  >
                    {usuarios.map((usuario, index) => (
                      <DraggableUser
                        key={usuario.id}
                        onClick={() => handleCardClick("usuarios", usuario)}
                        usuario={usuario}
                        index={index}
                      />
                    ))}
                    {droppableProvided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          </>
        }
        rightChild={
          activeButton === "ticket" ? (
            <TicketsView ticket={activeTicket} />
          ) : activeButton === "user" ? (
            <p className="m-2 text-center self-center font-light">
              User {activeUser.id}
            </p>
          ) : (
            <p className="m-2 text-center self-center font-light">
              Selecciona un Ticket o Usuario
            </p>
          )
        }
        swap={
          <UserTable usuarios={usuarios}/>
        }
      />
      {/* }
      /> */}
    </DragDropContext>
  );
};

export default Usuarios;


// const Usuarios = () => {
//   const [usuarios, setUsuarios] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${API_ROUTE}allusers/`)
//       .then((response) => {
//         setUsuarios(response.data);
//         console.log(response.data)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="bg-white p-8 rounded-md w-full">
//       <HeaderTable tablename="Tickets"/>
//       <div>
//         <UserTable usuarios={usuarios}/>
//       </div>
//     </div>
//   );
// };
