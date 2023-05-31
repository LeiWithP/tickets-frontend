import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableParrillaTicket from "../../components/DnD/DraggableParrillaTicket";
import ThreeColSwitch from "../../layouts/ThreeColSwitch";
import { reorder } from "../../components/DnD/Management";
import ParrillasView from "../Views/ParrillasView";
import TableParrilla from "../../components/Tables/TableParrilla";
import Slider from "../../components/Carousel";
import ParrillaForm from "../../components/Pop/ParrillaForm";
import TicketForm from "../../components/Pop/TicketForm";

const parrillasData = [
  {
    id: 1,
    parrilla: "GS",
    mes: "",
    empresa: 1
  },
  {
    id: 2,
    parrilla: "Cenavi",
    mes: "2",
    empresa: 1
  },
  {
    id: 3,
    parrilla: "Cemacon",
    mes: "3",
    empresa: 1
  },
  {
    id: 4,
    parrilla: "Cemacon",
    mes: "3",
    empresa: 1
  },
  {
    id: 5,
    parrilla: "Cemacon",
    mes: "3",
    empresa: 1
  },
  {
    id: 6,
    parrilla: "Cemacon",
    mes: "3",
    empresa: 1
  },


]

const parrillasTicketData = [
  {
    id: "1",
    fecha: "2023-05-27T09",
    objetivo: "",
    tema: "Publicacion",
    copy: "Copy xd",
    frase: "frase xd",
    link: "dir",
    tipos_contenido: "2",
    plataforma: "3",
    parrilla: 1,
    elaborado: null,
    ticket: 3
  },
  {
    id: "2",
    fecha: "2023-05-27T09",
    objetivo: "",
    tema: "Publicacion",
    copy: "Copy xd",
    frase: "frase xd",
    link: "dir",
    tipos_contenido: "2",
    plataforma: "3",
    parrilla: 2,
    elaborado: null,
    ticket: 13
  },
  {
    id: "3",
    fecha: "2023-05-27T09",
    objetivo: "",
    tema: "Publicacion",
    copy: "Copy xd",
    frase: "frase xd",
    link: "dir",
    tipos_contenido: "2",
    plataforma: "3",
    parrilla: 3,
    elaborado: null,
    ticket: 31
  },

]

const Parrillas = (props) => {
  const [tickets, setTickets] = useState(parrillasTicketData); // Los tickets de draggable
  const [ticketsParrillas, setTicketsParrillas] = useState(props.inittickets); // todos los tickets de parrillas
  const [parrillas, setParrillas] = useState(props.initparrillass);
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

  const handleParrillaClick = (object) => {
    setTickets(object);
    //setParrillas(object);
  };

  const handleParrillaData = (object) => {

    setActiveParrilla(true)

    var parr = object.id
    const ticketss = []
    console.log("ticketss")
    console.log(tickets)
    console.log(tickets)
    
    ticketsParrillas.map((ticket) => {
      if (ticket.parrilla === parr) {
        
        ticketss.push(ticket);
      }
    });
    
    
    handleParrillaClick(ticketss)
    setActiveButton(null)
    setParrillaName(object.parrilla)
    
    /*
    console.log(object.parrilla);
    setActiveParrilla(true)
  const handleDuc = (object) => {
    console.log(object.title);
    setActiveParrilla(true);


    if (object.parrilla == "1983") {
      handleParrillaClick(tareasIniciales);
      setActiveButton(null);
      setParrillaName("Cemacon");
    } else {
      handleParrillaClick(tareasNoIniciales);
      setActiveButton(null);
      setParrillaName('Like a Mom')
    }*/

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
              {parrillas.map((parrilla) => (
                <Slider.Item obj={parrilla} key={parrilla.id} fun={handleParrillaData}>
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
                        <DraggableParrillaTicket
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
              <TableParrilla tickets={tickets} />
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

export default Parrillas;
// <TablasParrillas parrillas={parrillas} />