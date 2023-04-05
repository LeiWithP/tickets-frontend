import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const tareasIniciales = [
  {
    id: "1",
    peticion: "Publicación Calentador solar Raysol en Super precio",
    medio_origen: "Correo",
    fecha_limite: "06/04/2023",
    prioridad: "1-URGENTE",
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
    id: "200",
    peticion: "informacion sobre le ticket 2",
    medio_origen: "Correo",
    fecha_limite: "06/04/2023",
    prioridad: "1-URGENTE",
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
    id: "32352",
    peticion: "Ticket 3: realizar las nuevas modificaciones antes del 24",
    medio_origen: "Correo",
    fecha_limite: "06/04/2023",
    prioridad: "1-URGENTE",
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
                  className="flex flex-col"
                >
                  {tickets.map((ticket, index) => (
                    <DraggableTicket key={ticket.id} ticket={ticket} index={index} />
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

const DraggableTicket = ({ ticket, index }) => {
  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(draggableProvided) => (
        <div
          className={`mx-2 mb-4 p-2 h-fit bg-white rounded-md hover:scale-95 flex flex-col`}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <div className="bg-slate-000 flex pb-2">
            <p className="px-0.5 bg-teal-200 rounded-lg">{ticket.id}</p>
            <p className="ml-4">{ticket.empresa}</p>
          </div>
          <div className="bg-slate-000 flex pb-1">
            <StateTag state='urgente'/>
            <ActivityTag activity='Edición Fotografía'/>
          </div>
          <div className="bg-slate-000 flex text-sm h-auto">
            {ticket.peticion}
          </div>
          {/* <p>ID: {ticket.id}</p>
          <p>{ticket.peticion}</p> */}
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

const StateTag = ({ state }) => {
  const [bgColor, setBgColor] = useState(() => {
    switch (state) {
      case 'urgente':
        return 'bg-red-600';
      case 'importante':
        return 'bg-yellow-500';
      case 'normal':
        return 'bg-green-400';
      case 'programado':
        return 'bg-blue-500';
      default:
        return 'bg-gray-400';
    }
  });

  return (
    <div
      className={`rounded-md text-white font-bold text-xs px-1 h-5 ${bgColor}`}
    >
      {state}
    </div>
  );
};

const ActivityTag = ({ activity }) => {
  const [bgColor, setBgColor] = useState(() => {
    switch (activity) {
      case 'Web':
        return 'bg-red-400';
      case 'Evento':
        return 'bg-yellow-400';
      case '3D':
        return 'bg-green-300';
      case 'Edición Fotografía':
        return 'bg-blue-300';
      default:
        return 'bg-gray-400';
    }
  });

  return (
    <div
      className={`rounded-md text-white font-bold text-xs px-1 h-5 ml-2 ${bgColor}`}
    >
      {activity}
    </div>
  );
};

export default Campanas;
