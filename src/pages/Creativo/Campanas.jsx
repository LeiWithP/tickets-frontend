import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import DraggableTicket from "../../components/DnD/DraggableTicket";
import Usercard from "../../components/Card/UserCard";
import { tareasIniciales, initialUsers } from "../../Data/TestData";
import TwoCol from "../../layouts/TwoCol";
import TopBar from "../../layouts/TopBar";

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

  const handleClickTicket = () => {
    console.log("UwU");
  };

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
      <TwoCol
        leftChild={
          <>
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
                      <DraggableTicket
                        key={ticket.id}
                        onClick={handleClickTicket}
                        ticket={ticket}
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
          <TopBar
            topChild={
              <>
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
              </>
            }
            BodyChild={
              <p className="m-2 text-center self-center font-light">
                Selecciona un Ticket o Usuario
              </p>
            }
          />
        }
      />
    </DragDropContext>
  );
};

export default Campanas;
