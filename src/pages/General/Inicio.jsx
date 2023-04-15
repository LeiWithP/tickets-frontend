import React from "react";
import { TicketCard } from "../../components/Card/TicketCard";

const Inicio = () => {
  const list1 = [<TicketCard />, <TicketCard />, <TicketCard />];
  const list2 = [
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
  ];
  const list3 = [
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
  ];
  const list4 = [<TicketCard />, <TicketCard />];
  const list5 = [
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
    <TicketCard />,
  ];

  return (
    <>
      <div className="h-full absolute flex justify-between">
        <div className="grid grid-flow-col auto-cols-max my-5">
          <TicketColumn name="Mario" tickets={list1} />
          <TicketColumn name="Sara" tickets={list2} />
          <TicketColumn name="Maria" tickets={list3} />
          <TicketColumn name="Sergio" tickets={list4} />
          <TicketColumn name="Alex" tickets={list5} />
        </div>
      </div>
    </>
  );
};

const TicketColumn = (props) => {
  const tickets = props.tickets;
  return (
    <div className="h-full m-3 bg-secondary bg-opacity-80 p-3 rounded-md drop-shadow-md flex flex-col overflow-y-auto relative">
      <h2 className="text-gray-50">{props.name}</h2>
      {tickets.map((ticket, index) => (
        <div key={index}>{ticket}</div>
      ))}
    </div>
  );
};

export default Inicio;
