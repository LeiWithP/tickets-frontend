import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableTicket from "../../components/DnD/DraggableTicket";
import {
  tareasIniciales,
  tareasNoIniciales,
  initialUsers,
  movies,
} from "../../Data/TestData";
import { parrillasInfo } from "../../Data/DataParrillas";
import ThreeColSwitch from "../../layouts/ThreeColSwitch";
import { reorder } from "../../components/DnD/Management";
import ParrillasView from "../Views/ParrillasView";
import TablasParrillas from "../../components/Tables/TablasParrilla";
import Slider from "../../components/Carousel";
import ParrillaForm from "../../components/Pop/ParrilaForm";
import TicketForm from "../../components/Pop/TicketForm";

const Tickets = () => {
  const [tickets, setTickets] = useState(tareasIniciales);
  //const [users, setusers] = useState(initialUsers);
  const [parrillas, setParrillas] = useState(parrillasInfo);
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

  const handleParrillaClick = (object) => {
    setTickets(object);
    //setParrillas(object);
  };

  const handleDuc = (object) => {
    console.log(object.title);
    setActiveParrilla(true);

    if (object.title == "1983") {
      handleParrillaClick(tareasIniciales);
      setActiveButton(null);
      setParrillaName("Cemacon");
    } else {
      handleParrillaClick(tareasNoIniciales);
      setActiveButton(null);
      setParrillaName("Like a Mom");
    }
  };

  const formData = {
    
  };

  const onCreate = (data) => {
    console.log(data);
    fetch(`${API_ROUTE}tickets/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ThreeColSwitch
        name="Parrillas"
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
        form={<ParrillaForm formData={formData} onCreate={onCreate} />}
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
