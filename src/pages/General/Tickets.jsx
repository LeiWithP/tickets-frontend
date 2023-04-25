import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableTicket from "../../components/DnD/DraggableTicket";
import { motion } from "framer-motion";
import { tareasIniciales } from "../../Data/TestData";
import TwoColSwitch from "../../layouts/TwoColSwitch";
import { reorder } from "../../components/DnD/Management";
import TicketsView from "../Views/TicketsView";
import TicketsTable from "../../components/Tables/TicketsTable";

const Tickets = () => {
  const [tickets, setTickets] = useState(tareasIniciales);
  //const [users, setusers] = useState(initialUsers);

  const [activeUser, setActiveUser] = useState();
  const [activeTicket, setActiveTicket] = useState();
  const [activeButton, setActiveButton] = useState();

  const handleCardClick = (buttonId, object) => {
    setActiveButton(buttonId);
    buttonId === "ticket"
      ? setActiveTicket(object)
      : // : buttonId === "user"
        // ? setActiveUser(object)
        console.log("Id unknow");
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
    // if (result.destination.droppableId === "1")
    //   setusers((prevUsers) => deleteCard(prevUsers, source.index));
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
      <TwoColSwitch
        name="Tickets"
        leftSize="1/4"
        rightSize="3/4"
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
                      <li key={ticket.id}>
                        <DraggableTicket
                          key={ticket.id}
                          onClick={() => handleCardClick("ticket", ticket)}
                          ticket={ticket}
                          index={index}
                        />
                        {ticket === activeTicket ? (
                          <motion.div layoutId="underline" />
                        ) : null}
                      </li>
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
            <motion.div
              className="h-full w-full overflow-hidden"
              key={activeTicket ? activeTicket.id : "empty"}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TicketsView ticket={activeTicket} />
            </motion.div>
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
        swap={<TicketsTable tickets={tickets} />}
      />
    </DragDropContext>
  );
};

export default Tickets;
