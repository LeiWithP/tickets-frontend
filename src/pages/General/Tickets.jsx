import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableTicket from "../../components/DnD/DraggableTicket";
import { motion } from "framer-motion";
import { tareasIniciales } from "../../Data/TestData";
import TwoColSwitch from "../../layouts/TwoColSwitch";
import { reorder } from "../../components/DnD/Management";
import TicketsView from "../Views/TicketsView";
import TicketsTable from "../../components/Tables/TicketsTable";
import TicketsTable2 from "../../components/Tables/TicketsTablev2";
import ViewAnimation from "../../layouts/ViewAnimation";
import TicketForm from "../../components/Pop/TicketForm";
import API_ROUTE from "../../routes/ApiRoute";

const Tickets = (props) => {
  const [tickets, setTickets] = useState(props.inittickets);
  const [prioridades, setPrioridades] = useState(props.catalogos[0]);
  const [estados, setEstados] = useState(props.catalogos[1]);
  const [actividades, setActividades] = useState(props.catalogos[2]);
  const [usos, setUsos] = useState(props.catalogos[3]);
  const [dias, setDias] = useState(props.catalogos[4]);
  const [mediosOrigen, setMediosOrigen] = useState(props.catalogos[5]);
  const [errores, setErrores] = useState(props.catalogos[6]);
  const [tiposError, setTiposError] = useState(props.catalogos[7]);
  //const [users, setusers] = useState(initialUsers);

  useEffect(() => {
    console.log("tickets:", tickets);
    // console.log(prioridades);
    // console.log(estados);
    // console.log(actividades);
    // console.log(usos);
    // console.log(dias);
    // console.log(mediosOrigen);
    // console.log(errores);
    // console.log(tiposError);
  }, []);

  const [activeUser, setActiveUser] = useState();
  const [activeTicket, setActiveTicket] = useState();
  const [activeButton, setActiveButton] = useState();

  const handleCardClick = (buttonId, object) => {
    setActiveButton(buttonId);

    buttonId === "ticket"
      ? //? setActiveTicket(makeReadable(object, props.catalogos))
      setActiveTicket(object)
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

  const currentDate = new Date();
  const formData = {
    // peticion: 'Peticion',
    // lastName: 'Doe',
    // country: 'usa',
    // fechaEntrega: '2022-05-16T00:00:00.000Z'
    fecha_limite: currentDate.toDateString,
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
      <TwoColSwitch
        name="Tickets"
        leftSize="1/4"
        rightSize="3/4"
        onCreate={onCreate}
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
            <div
              className="h-full w-full overflow-hidden"
              key={activeTicket ? activeTicket.id : "empty"}
            >
              <ViewAnimation>
                <TicketsView ticket={activeTicket} />
              </ViewAnimation>
            </div>
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
        swap={<TicketsTable2 tickets={tickets}/>}
        form={<TicketForm formData={formData} onCreate={onCreate} />}
      />
    </DragDropContext>
  );
};

export default Tickets;

//swap={<TicketsTable tickets={tickets} />}
