import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableTicket from "../../components/DnD/DraggableTicket";
import { tareasIniciales } from "../../Data/TestData";
import { reorder } from "../../components/DnD/Management";
import TicketsView from "../Views/TicketsView";

const Perfil = ({ height }) => {
  const [tickets, setTickets] = useState(tareasIniciales);

  const [activeTicket, setActiveTicket] = useState();
  const [activeButton, setActiveButton] = useState();

  const handleCardClick = (buttonId, object) => {
    setActiveButton(buttonId);
    buttonId === "ticket" ? setActiveTicket(object) : console.log("Id unknow");
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
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={`h-${height} p-8 w-full flex bg-behind-1`}>
        <div className="mr-4 py-4 w-32 h-full flex flex-col items-center justify-start">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="https://www.w3schools.com/howto/img_avatar.png"
            className="object-cover h-24 w-24 rounded-full"
          />
          <BoxInfo info="Usuario" />
          <Separator />
          <BoxInfo info="Director Operativo" />
          <Separator />
          <div className="w-full mx-2 my-4 py-2 text-center bg-primary rounded-lg font-semibold text-white">
            Pedro Uziel Barrita Licea
          </div>
        </div>
        <div className="h-full grow flex">
          <div className="h-full w-1/4 m-1 p-2 bg-gradient-to-b from-white to-behind-1 flex-col rounded-md">
            <p className="text-center font-semibold">Mis Tickets</p>
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
          </div>
          <div className="h-full w-3/4 my-1 mx-6 flex flex-col">
            {activeButton === "ticket" ? (
              <TicketsView ticket={activeTicket} />
            ) : activeButton === "user" ? (
              <p className="m-2 text-center self-center font-light">
                User {activeUser.id}
              </p>
            ) : (
              <p className="h-full m-2 text-center font-light">
                Selecciona un Usuario
              </p>
            )}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

const BoxInfo = ({ info }) => {
  return (
    <div className="w-full bg-secondary rounded-xl my-4 px-2 py-1 flex items-center text-2xl text-white text-center justify-center">
      {info}
    </div>
  );
};

const Separator = () => {
  return <div className="w-full bg-primary h-0.5"></div>;
};

export default Perfil;
