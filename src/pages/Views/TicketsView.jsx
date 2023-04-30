import React from "react";

const TicketsView = ({ ticket }) => {
  return (
    <div className="w-full h-3/4 bg-gradient-to-b from-primary to-behind-1 rounded-md flex flex-col">
      <div className="w-full p-5 h-1/5 flex">
        <div className="bg-extra h-full w-1/6 rounded-full flex items-center justify-center text-white sm:text-lg md:text-xl lg:text-4xl">
          {ticket.id}
        </div>
        <div className="ml-4">
          <p className="font-bold text-white sm:text-lg md:text-3xl lg:text-4xl">
            {ticket.empresa}
          </p>
          <p className="text-right text-white sm:text-sm md:text-sm lg:text-lg sm:mt-0 md:mt-2 lg:mt-4">Creado: {ticket.fecha_solicitud}</p>
        </div>
      </div>

      <div className="h-full mb-2 bg-gradient-to-b from-primary to-behind-1 grid grid-rows-10 grid-cols-6 gap-2">
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
        <div className="row-span-5 col-span-6 bg-white bg-opacity-0 flex grow items-center sm:text-xl md:text-2xl lg:text-4xl">
          <p className="px-4">"{ticket.peticion}"</p>
        </div>
        {/* <div className="row-span-5 col-span-2 flex flex-col justify-center items-center">
          <p>ENCARGADO</p>
          <Usercard/>
          <p>APOYO</p>
          <Usercard/>
        </div> */}

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
        <div className="row-span-1 col-span-3 bg-white bg-opacity-40 rounded-r-md rounded-b-md">
          <BoxTitle title="Levanta" content={ticket.levanta_ticket} />
        </div>
        <div className="row-span-1 col-span-3 bg-white bg-opacity-40 rounded-l-md rounded-b-md">
          <BoxTitle title="Solicita" content={ticket.cliente_solicita} />
        </div>
      </div>
    </div>
  );
};

const BoxTitle = (props) => {
  return (
    <div className="w-full h-full flex flex-col text-lg">
      <p className="px-2 pt-2 sm:text-xs md:text-sm lg:text-lg">{props.title}</p>
      <p className="flex grow  items-center justify-center font-semibold sm:text-lg md:text-1xl lg:text-2xl overflow-hidden">
        {props.content}
      </p>
    </div>
  );
};

export default TicketsView;
