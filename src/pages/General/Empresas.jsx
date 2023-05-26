import React from "react";
import { TicketCard } from "../../components/Card/TicketCard";

const Empresas = () => {
    const list1 = [<TicketCard />, <TicketCard />, <TicketCard />];
    const list2 = [
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
            
            
          </div>
        </div> 
        <div className="ml-60 space-x-8">
            <button className="bg-gradient-to-bl from-primary to-blue-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
              Agregar Empresa
            </button>
          </div>
          <br/>
        <div className="ml-60 space-x-12">
            <button className="bg-gradient-to-bl from-primary to-yellow-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
              Editar
            </button>
          </div>
        <br/>
        <div className="ml-60 space-x-12">
            <button className="bg-gradient-to-bl from-primary to-red-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
              Eliminar
            </button>
          </div>
      </>
    );
  };
  
  const TicketColumn = (props) => {
    const tickets = props.tickets;
    return (
      <div className="h-full m-3 bg-secondary bg-opacity-60 p-2 rounded-md drop-shadow-md flex flex-col overflow-y-auto relative">
        <h2 className="text-gray-50">{props.name}</h2>
        {tickets.map((ticket, index) => (
          <div key={index}>{ticket}</div>
        ))}
      </div>
    );
  };

export default Empresas;