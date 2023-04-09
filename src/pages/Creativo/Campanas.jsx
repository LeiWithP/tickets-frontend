import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableTicket from "../../components/DnD/DraggableTicket";
import Usercard from "../../components/Card/UserCard";
import { tareasIniciales, initialUsers } from "../../Data/TestData";
import TwoCol from "../../layouts/TwoCol";
import TopBar from "../../layouts/TopBar";
import { reorder } from "../../components/DnD/Management";
import TicketsView from "../DG/TicketsView";

const Campanas = () => {
  const [tickets, setTickets] = useState(tareasIniciales);
  const [users, setusers] = useState(initialUsers);

  const [activeUser, setActiveUser] = useState();
  const [activeTicket, setActiveTicket] = useState();
  const [activeButton, setActiveButton] = useState();

  const handleCardClick = (buttonId, object) => {
    setActiveButton(buttonId);
    buttonId === 'ticket' ? setActiveTicket(object)
    : buttonId === 'user' ? setActiveUser(object)
    : console.log('Id unknow')
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
                        onClick={() => handleCardClick("ticket", ticket)}
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
          // <TopBar
          //   topChild={
          //     <>
          //       <h2 className="mt-2 pt-2 text-center font-bold">Creativos</h2>
          //       <div className="px-2 overflow-auto snap-x scroll-p-2">
          //         <Droppable droppableId="users">
          //           {(droppableProvided) => (
          //             <ul
          //               className="flex"
          //               {...droppableProvided.droppableProps}
          //               ref={droppableProvided.innerRef}
          //             >
          //               {users.map((user, index) => (
          //                 <li key={user.id}>
          //                   <Usercard
          //                     onClick={() => handleCardClick("user", user)}
          //                     key={user.id}
          //                     user={user}
          //                     index={index}
          //                   />
          //                 </li>
          //               ))}
          //               {droppableProvided.placeholder}
          //             </ul>
          //           )}
          //         </Droppable>
          //       </div>
          //     </>
          //   }
          //   BodyChild={
              activeButton === "ticket" ? (
                <TicketsView ticket={activeTicket}/>
              ) : activeButton === "user" ? (
                <p className="m-2 text-center self-center font-light">User {activeUser.id}</p>
              ) : (
                <p className="m-2 text-center self-center font-light">
                  Selecciona un Ticket o Usuario
                </p>
              )
            }
          />
        {/* }
      /> */}
    </DragDropContext>
  );
};

export default Campanas;
