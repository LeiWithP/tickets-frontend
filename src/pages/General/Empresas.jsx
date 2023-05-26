import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableTicket from "../../components/DnD/DraggableTicket";
import {
  tareasIniciales,
  tareasNoIniciales,
  initialUsers,
  movies,
} from "../../Data/TestData";
import { empresasInfo } from "../../Data/DataEmpresas";
import ThreeColSwitch from "../../layouts/ThreeColSwitch";
import { reorder } from "../../components/DnD/Management";
import EmpresasView from "../Views/EmpresasView";
import EmpresasTable from "../../components/Tables/EmpresasTable";

const Tickets = () => {
  const [tickets, setTickets] = useState(tareasIniciales);
  //const [users, setusers] = useState(initialUsers);
  const [empresas, setEmpresas] = useState(empresasInfo);
  
  const [parrillaName, setParrillaName] = useState();

  const [activeUser, setActiveUser] = useState();
  const [activeTicket, setActiveTicket] = useState();
  const [activeParrilla, setActiveParrilla] = useState(false);
  const [activeButton, setActiveButton] = useState();

  const handleCardClick = (buttonId, object) => {

    setActiveButton(buttonId);
    buttonId === "ticket"
      ? setActiveTicket(object)
      : buttonId === "user"
        ? setActiveUser(object)
        : console.log("Id unknow");

    /*
  if (activeButton == buttonId) {
    setActiveButton("")
    console.log(object)
  }
  else {
    setActiveButton(buttonId)
    buttonId === "Parrillas"
      ? setActiveTicket(object)
      : console.log("Id unknow")
    console.log("else")
  }*/
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
      <ThreeColSwitch
        name="Empresas"
        leftChild={
          activeParrilla === true ? (
            <>
              <h2 className="m-2 text-center font-bold">{parrillaName}</h2>
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
          ) : (
            <p className="m-2 text-center self-center font-light">
              Selecciona una Parrilla
            </p>
          )
        }
        rightChild={
          activeButton === "ticket" ? (
            <EmpresasView ticket={activeTicket} />
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

          activeParrilla === true ? (
            <>
              <EmpresasTable empresas={empresas} />
            </>
          ) : (
            <p className="m-2 text-center self-center font-light">
              Selecciona una Parrilla
            </p>
          )


        }
      />
      {/* }
      /> */}
    </DragDropContext>
  );
};

export default Tickets;
