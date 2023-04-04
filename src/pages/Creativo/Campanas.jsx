import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const tareasIniciales = [
  {
    id: "1",
    text: "Ticket 1",
    info: "realizar funcionamiento de cartas",
  },
  {
    id: "2",
    text: "Ticket 2",
    info: "realizar funcionamiento de cartas",
  },
  {
    id: "3",
    text: "Ticket 3",
    info: "realizar funcionamiento de cartas",
  },
];

const initialUsers = [
  {
    id: "1",
    nombre: "Mario",
  },
  {
    id: "2",
    nombre: "Maria",
  },
  {
    id: "3",
    nombre: "Hugo",
  },
  {
    id: "4",
    nombre: "Roberto",
  },
  {
    id: "5",
    nombre: "Helena",
  },
  {
    id: "6",
    nombre: "Sofia",
  },
  {
    id: "7",
    nombre: "Alex",
  },
  {
    id: "8",
    nombre: "Mindy",
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

    if (result.destination.droppableId === "users")
      setusers((prevUsers) =>
        reorder(prevUsers, source.index, destination.index)
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
        <div className="h-full w-1/4 m-1 p-2 bg-gradient-to-b from-primary flex-col rounded-md">
          <h2 className="m-2 text-center font-bold">Tickets</h2>
          <div>
            {/* <Droppable droppableId="tickets">
              {(droppableProvided) => ( */}
            <ul
            // {...droppableProvided.droppableProps}
            // ref={droppableProvided.innerRef}
            >
              {tickets.map((ticket) => (
                <TicketBit ticket={ticket} />
              ))}
              {/* {droppableProvided.placeholder} */}
            </ul>
            {/* )} */}
            {/* </Droppable> */}
          </div>
        </div>
        <div className="h-full w-3/4 m-1 p-2 rounded-md bg-gradient-to-b from-secondary">
          <h2 className="m-2 text-center">Creativos</h2>
          <div>
            <Droppable droppableId="users">
              {(droppableProvided) => (
                <ul
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
      </div>
    </DragDropContext>
  );
};

const TicketBit = ({ ticket }) => {
  return (
    <Droppable droppableId={ticket.id}>
      {(droppableProvided) => (
        <div
          className={`m-3 p-1 h-24 bg-white rounded-md hover:scale-95`}
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
        >
          <p>{ticket.text}</p>
          <p>{ticket.info}</p>
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const Usercard = ({ user, index }) => {
  return (
    <Draggable draggableId={user.id} index={index}>
      {(draggableProvided) => (
        <div
          className="m-3 p-1 flex bg-white rounded-md hover:scale-95"
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <AccountCircleIcon className="" />
          <p>{user.nombre}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Campanas;
