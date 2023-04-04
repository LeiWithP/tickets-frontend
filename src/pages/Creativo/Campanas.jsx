import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const tareasIniciales = [
  {
    id: "1",
    peticion: "Ticket 1",
    medio_origen: "Correo",
    fecha_limite: "06/04/2023",
    servidor_ubicacion: "",
    actividad: "Web",
    uso: "Actualizacion de Datos",
    // frecuencia: "",
    // duracion: "",
    estado: "Correcciones",
    fecha_entrega: "",
    info_cliente: "Informacion del cliente",
    observaciones: "",
    correcciones: "",
    error: "",
    tipo_error: "",
    empresa: "Gaytan",
    levanta_ticket: "Maria",
    cliente_solicita: "Roberto G.",
    encargado: "Maria",
    apoyo: "Mario",
  },
  {
    id: "2",
    peticion: "Ticket 2",
    medio_origen: "Correo",
    fecha_limite: "06/04/2023",
    servidor_ubicacion: "",
    actividad: "Web",
    uso: "Actualizacion de Datos",
    // frecuencia: "",
    // duracion: "",
    estado: "Correcciones",
    fecha_entrega: "",
    info_cliente: "Informacion del cliente",
    observaciones: "",
    correcciones: "",
    error: "",
    tipo_error: "",
    empresa: "Gaytan",
    levanta_ticket: "Maria",
    cliente_solicita: "Roberto G.",
    encargado: "Maria",
    apoyo: "Mario",
  },
  {
    id: "3",
    peticion: "Ticket 3",
    medio_origen: "Correo",
    fecha_limite: "06/04/2023",
    servidor_ubicacion: "",
    actividad: "Web",
    uso: "Actualizacion de Datos",
    // frecuencia: "",
    // duracion: "",
    estado: "Correcciones",
    fecha_entrega: "",
    info_cliente: "Informacion del cliente",
    observaciones: "",
    correcciones: "",
    error: "",
    tipo_error: "",
    empresa: "Gaytan",
    levanta_ticket: "Maria",
    cliente_solicita: "Roberto G.",
    encargado: "Maria",
    apoyo: "Mario",
  },
];

const initialUsers = [
  {
    id: "1",
    username: "Mario",
    first_name: "Mario Hugo",
    last_name: "Mendez Villa",
    group: "creativo",
    is_active: "true",
    last_login: "28-02-2023 13:02",
  },
  {
    id: "2",
    username: "Maria",
    first_name: "Maria Agata",
    last_name: "Rodriguez Gomez",
    group: "creativo",
    is_active: "true",
    last_login: "28-04-2023 13:45",
  },
  {
    id: "3",
    username: "Roberto",
    first_name: "Roberto",
    last_name: "Rodriguez Gomez",
    group: "creativo",
    is_active: "true",
    last_login: "28-04-2023 13:45",
  },
  {
    id: "4",
    username: "Emily",
    first_name: "Emily Helena",
    last_name: "Rodriguez Gomez",
    group: "creativo",
    is_active: "true",
    last_login: "28-04-2023 13:45",
  },
  {
    id: "5",
    username: "Emily",
    first_name: "Emily Helena",
    last_name: "Rodriguez Gomez",
    group: "creativo",
    is_active: "true",
    last_login: "28-04-2023 13:45",
  },
  {
    id: "6",
    username: "Emily",
    first_name: "Emily Helena",
    last_name: "Rodriguez Gomez",
    group: "creativo",
    is_active: "true",
    last_login: "28-04-2023 13:45",
  },
  {
    id: "7",
    username: "Emily",
    first_name: "Emily Helena",
    last_name: "Rodriguez Gomez",
    group: "creativo",
    is_active: "true",
    last_login: "28-04-2023 13:45",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const deleteCard = (list, startIndex) => {
  const result = [...list];
  result.splice(startIndex, 1);

  return result;
};

const Campanas = () => {
  const [tickets, setTickets] = useState(tareasIniciales);
  const [users, setusers] = useState(initialUsers);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!result.destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    if (result.destination.droppableId === "tickets")
      setTickets((prevTickets) =>
        reorder(prevTickets, source.index, destination.index)
      );
    if (result.destination.droppableId === "1")
      setusers((prevUsers) => deleteCard(prevUsers, source.index));
    // const items = Array.from(tickets);
    // const [reorderedItem] = items.splice(result.source.index, 1);

    // if (result.destination.droppableId === "users") {
    //   setCreativos((creativos) => [...creativos, reorderedItem]);
    // } else {
    //   items.splice(result.destination.index, 0, reorderedItem);
    //   setTickets(items);
    // }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="h-full p-1 bg-slate-100 flex">
        <div className="h-full w-1/4 m-1 p-2 bg-primary flex-col rounded-md">
          <h2 className="m-2 text-center font-bold">Tickets</h2>
          <div>
            <Droppable droppableId="tickets">
              {(droppableProvided) => (
                <ul
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                >
                  {tickets.map((ticket, index) => (
                    <TicketBit key={ticket.id} ticket={ticket} index={index} />
                  ))}
                  {droppableProvided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </div>

        <div className="h-full w-3/4 m-1 rounded-md flex flex-col">
          <div className="h-1/8 w-full rounded-md bg-secondary">
            <h2 className="mt-2 pt-2 text-center font-bold">Creativos</h2>
            <div className="px-2 overflow-auto">
              <Droppable droppableId="users">
                {(droppableProvided) => (
                  <ul
                    className="flex"
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                  >
                    {users.map((user, index) => (
                      <li key={user.id}>
                        <Usercard key={user.id} user={user} index={index} />
                      </li>
                    ))}
                    {droppableProvided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          </div>
          <div className="w-full mt-2 p-2 rounded-md bg-secondary flex grow justify-center">
            <p className="m-2 text-center self-center font-light">
              Selecciona un Ticket o Usuario
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

const TicketBit = ({ ticket, index }) => {
  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(draggableProvided) => (
        <div
          className={`m-3 p-1 h-24 bg-white rounded-md hover:scale-95`}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <p>{ticket.id}</p>
          <p>{ticket.peticion}</p>
        </div>
      )}
    </Draggable>
  );
};

const Usercard = ({ user, index }) => {
  return (
    // <Draggable draggableId={user.id} index={index}>
    //   {(draggableProvided) => (
    <div
      className="m-3 p-1 flex bg-white rounded-md hover:scale-95 w-40"
      // ref={draggableProvided.innerRef}
      // {...draggableProvided.draggableProps}
      // {...draggableProvided.dragHandleProps}
    >
      {/* <AccountCircleIcon className="" /> */}
      <div className="bg-primary w-12 h-12 m-2 rounded-full"></div>
      <div className="m-2">
        <p>{user.first_name}</p>
      </div>
    </div>
    //   )}
    // </Draggable>
  );
};

export default Campanas;
