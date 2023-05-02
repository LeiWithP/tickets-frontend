import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableTicket from "../../components/DnD/DraggableTicket";
import Usercard from "../../components/Card/UserCard";
import {
  tareasIniciales,
  tareasNoIniciales,
  initialUsers,
  movies,
} from "../../Data/TestData";
import { parrillasInfo } from "../../Data/DataParrillas";
import TwoColSwitch from "../../layouts/TwoColSwitch";
import ThreeColSwitch from "../../layouts/ThreeColSwitch";
import TopBar from "../../layouts/TopBar";
import { reorder } from "../../components/DnD/Management";
import ParrillasView from "../Views/ParrillasView";
import TicketsView from "../Views/TicketsView";
import TablasParrillas from "../../components/Tables/TablasParrilla";
import Slider from "../../components/Carousel";

const Tickets = () => {
  const [tickets, setTickets] = useState(tareasIniciales);
  //const [users, setusers] = useState(initialUsers);
  const [parrillas, setParrillas] = useState(parrillasInfo);

  const [activeUser, setActiveUser] = useState();
  const [activeTicket, setActiveTicket] = useState();
  const [activeParrilla, setActiveParrilla] = useState(false);
  const [activeButton, setActiveButton] = useState();
  const [activeParrilla, setActiveParrilla] = useState();


  const handleCardClick = (buttonId, object) => {

    if (activeButton == buttonId) {
      setActiveButton("")
      console.log(object)
    }
    else {
      setActiveButton(buttonId)
      buttonId === "Parrillas"
        ? setActiveParrilla(object)
        : console.log("Id unknow")
      console.log("else")
    }
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

  const handleParrillaClick = (object) => {
    setTickets(object);
  };

  const handleDuc = (object) => {
    console.log(object.title);
    setActiveParrilla(true)

    if (object.title == "1983") {
      handleParrillaClick(tareasIniciales);
      setActiveButton(null);
    } else {
      handleParrillaClick(tareasNoIniciales);
      setActiveButton(null);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ThreeColSwitch
        name="Tickets"
        upperChild={
          <>
            <Slider>
              {movies.map((movie) => (
                <Slider.Item movie={movie} key={movie.id} fun={handleDuc}>
                  item1
                </Slider.Item>
              ))}
            </Slider>
          </>
        }
        leftChild={
          activeParrilla === true ? (
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
          ) : (
            <p className="m-2 text-center self-center font-light">
              Selecciona una Parrilla
            </p>
          )
        }
        rightChild={
          activeButton === "ticket" ? (
            <ParrillasView ticket={activeTicket} />
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
              <TablasParrillas parrillas={parrillas} />
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
/*
<div className="p-12 bg-black"
            onClick={() => handleParrillaClick(tareasIniciales)}
            ></div>
            <div className="p-12 bg-slate-400"
            onClick={() => handleParrillaClick(tareasNoIniciales)}
            ></div>
            <div className="p-12 bg-black"></div>
             */
