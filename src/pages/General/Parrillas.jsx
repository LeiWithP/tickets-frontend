import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { tareasIniciales, initialUsers } from "../../Data/TestData";
import { parrillasInfo } from "../../Data/DataParrillas";
import TwoColSwitch from "../../layouts/TwoColSwitch";
import { reorder } from "../../components/DnD/Management";
import TablasParrillas from "../../components/Tables/TablasParrilla";
import DraggableParrilla from "../../components/DnD/DraggableParrilla";

const Tickets = () => {
  const [tickets, setTickets] = useState(tareasIniciales);
  //const [users, setusers] = useState(initialUsers);
  const [parrillas, setParrillas] = useState(parrillasInfo);

  const [activeUser, setActiveUser] = useState();
  const [activeTicket, setActiveTicket] = useState();
  const [activeButton, setActiveButton] = useState();
  const [activeParrilla, setActiveParrilla] = useState();


  const handleCardClick = (buttonId, object) => {
    setActiveButton(buttonId);
    buttonId === "Parrillas"
      ? setActiveParrilla(object)
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
                    {parrillas.map((parrillas, index) => (
                      <DraggableParrilla
                        key={parrillas.id}
                        onClick={() => handleCardClick("Parrillas", parrillas[0])}
                        parrilla={parrillas}
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
          activeButton === "Parrillas" ? (
            <TablasParrillas parrillas={parrillas} />
          ) : (
            <p className="m-2 text-center self-center font-light">
              Selecciona un Ticket o Usuario
            </p>
          )
        }
        swap={
          <TablasParrillas parrillas={parrillas} />
        }
      />
      {/* }
      /> */}
    </DragDropContext>
  );
};

export default Tickets;
