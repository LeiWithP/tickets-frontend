import React from "react";
import Usercard from "../../components/Card/UserCard";

const TicketsView = ({ ticket }) => {
  return (
    <div className="w-full h-full bg-primary bg-opacity-100 rounded-md flex flex-col">
      <div className="w-full p-5 h-1/5 flex">
        <div className="bg-extra h-32 w-32 rounded-full flex items-center justify-center text-3xl text-white">
          {ticket.id}
        </div>
        <div className="ml-4">
          <p className="text-7xl">{ticket.empresa}</p>
          <p className="mt-4 text-right">Creado: {ticket.fecha_solicitud}</p>
        </div>
      </div>

      <div className="h-full bg-primary grid grid-rows-10 grid-cols-6 gap-2">
        {/* First row */}
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-r-md">
          <BoxTitle title="Prioridad" content={ticket.prioridad} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-md">
          <BoxTitle title="Actividad" content={ticket.actividad} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-l-md">
          <BoxTitle title="Estado" content={ticket.Terminado} />
        </div>

        {/* Second row */}
        <div className="row-span-5 col-span-4 bg-white bg-opacity-0 flex grow items-center text-4xl">
          <p className="px-4">"{ticket.peticion}"</p>
        </div >
        <div className="row-span-5 col-span-2 flex flex-col justify-center items-center">
          <p>ENCARGADO</p>
          <Usercard/>
        {/* </div>
        <div className="row-span-5 col-span-1 flex flex-col justify-center items-center"> */}
          <p>APOYO</p>
          <Usercard/>
        </div>

        {/* Third row */}
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-r-md">
          <BoxTitle title="Uso" content={ticket.uso} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-md">
          <BoxTitle title="Medio Origen" content={ticket.medio_origen} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-l-md">
          <BoxTitle title="Fecha Limite" content={ticket.fecha_limite} />
        </div>

        {/* Fourth row */}
        <div className="row-span-1 col-span-3 bg-white bg-opacity-40 rounded-r-md">
          <BoxTitle title="Levanta" content={ticket.levanta_ticket} />
        </div>
        <div className="row-span-1 col-span-3 bg-white bg-opacity-40 rounded-l-md">
          <BoxTitle title="Solicita" content={ticket.cliente_solicita} />
        </div>
      </div>
      {/* <div className="w-full mt-1 p-4 flex grow">
        <div className="h-full w-1/2 bg-slate-100 flex flex-col">
          <div className="bg-slate-400 p-2 text-2xl">{ticket.peticion}</div>
          <div></div>
        </div>
        <div className="h-full w-1/2 flex flex-col">
          <div className="w-full h-1/12 flex justify-evenly">
            <p>encargado</p>
            <p>apoyo</p>
          </div>
          <div className="w-full h-1/12 flex justify-evenly">
            <Usercard/>
            <Usercard/>
          </div>
          <div className="pl-8 w-full flex flex-col grow text-2xl justify-evenly">
            <p>Informacion Cliente: {ticket.info_cliente}</p>
            <p>Prioridad: {ticket.prioridad}</p>
            <p>Actividad: {ticket.actividad}</p>
            <p>Uso: {ticket.uso}</p>
            <p>Medio Origen: {ticket.medio_origen}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

const BoxTitle = (props) => {
  return (
    <div className="w-full h-full flex flex-col text-lg">
      <p className="px-2 pt-2">{props.title}</p>
      <p className="flex grow -translate-y-4 items-center justify-center text-3xl">
        {props.content}
      </p>
    </div>
  );
};

export default TicketsView;
