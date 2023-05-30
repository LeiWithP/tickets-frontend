import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';

const ParrillasView = ({ ticket }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <div class="py-0 ">
        <div class="flex min-h-min min-w-min max-w-max max-h-max bg-white shadow-lg rounded-lg overflow-y-auto flex-col lg:flex-row">
          <img
            src="https://marketplace.canva.com/EAE9LRMRVKU/1/0/1131w/canva-orange-white-creative-we%27re-hiring-poster-tyRJAGIzvq8.jpg"
            className="w-full lg:w-1/3 h-auto relative "
            alt=""
          />

          <div class="w-full lg:w-2/3 p-4">
            <div className="bg-slate-000 flex pb-2 border-b border-secondary overflow-hidden justify-between ">
              <p className="px-1 bg-extra text-white text-left rounded-lg">
                {ticket.id}
              </p>
              <h1 className="ml-4 font-semibold text-right overflow-hidden">
                {ticket.fecha}
              </h1>
            </div>

            <div className="my-4 flex justify-between">
              <h1 class="text-gray-900 font-bold text-2xl">{ticket.tema}</h1>
              <FacebookIcon fontSize="large" />
            </div>

            <div class="block my-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 ">
              <h1 className="font-semibold text-left">{ticket.objetivo}</h1>
              <p class="mt-2 text-gray-600 text-sm">
                {ticket.copy}
              </p>
            </div>

            <div class="flex item-center mt-2">
              <div class="flex-1 inline-flex items-center">
                <span class="material-symbols-outlined h-8">account_circle</span>
                <p class="ml-3 text-gray-700 font-bold text-md text"> {ticket.elaborado}</p>
              </div>
            </div>
            <div class="flex item-center justify-between mt-3">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BoxTitle = (props) => {
  return (
    <div className="w-full h-full flex flex-col text-lg">
      <p className="px-2 pt-2 sm:text-xs md:text-sm lg:text-lg">
        {props.title}
      </p>
      <p className="flex grow  items-center justify-center font-semibold sm:text-lg md:text-1xl lg:text-2xl overflow-hidden">
        {props.content}
      </p>
    </div>
  );
};

export default ParrillasView;

/*

<div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10">
              <div className="relative ">
                <img
                  src="https://marketplace.canva.com/EAE9LRMRVKU/1/0/1131w/canva-orange-white-creative-we%27re-hiring-poster-tyRJAGIzvq8.jpg"
                  className="w-full h-1/2 relative z-10"
                  alt=""
                />
                <div className="border-4 border-slate-600 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <div className="flex flex-row">
                  <h1 className="flex text-left font-bold uppercase lg:text-2xl md:text-lg mb-5">
                    { ticket.peticion }
                  </h1>
                  <p className="text-right sm:text-sm md:text-sm lg:text-lg">Creado: {ticket.fecha_solicitud}</p>

                </div>
                
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                  voluptates, sint enim fugiat saepe, dolor fugit, magnam
                  explicabo eaque quas id quo porro dolorum facilis...{" "}
                  <a
                    href="#"
                    className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i className="mdi mdi-arrow-right"></i>
                  </a>
                </p>
              </div>
              
            </div>
          </div>


///
<div className="w-full h-full bg-gradient-to-b from-primary to-behind-1 rounded-md flex flex-col">
      <div className="w-full p-5 h-1/5 flex">
        <div className="bg-extra h-full w-1/6 rounded-full flex items-center justify-center text-white sm:text-lg md:text-xl lg:text-4xl">
          {ticket.id}
        </div>
        <div className="ml-4">
          <p className="font-bold sm:text-lg md:text-3xl lg:text-4xl">
            {ticket.empresa}
          </p>
          <p className="text-right sm:text-sm md:text-sm lg:text-lg sm:mt-0 md:mt-2 lg:mt-4">Creado: {ticket.fecha_solicitud}</p>
        </div>
      </div>

      <div className="h-full mb-2 bg-gradient-to-b from-primary to-behind-1 grid grid-rows-10 grid-cols-6 gap-2">
        
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-r-md">
          <BoxTitle title="Prioridad" content={ticket.prioridad} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-md">
          <BoxTitle title="Actividad" content={ticket.actividad} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-80 rounded-l-md">
          <BoxTitle title="Estado" content={ticket.Terminado} />
        </div>

        
        <div className="row-span-5 col-span-6 bg-white bg-opacity-0 flex grow items-center sm:text-xl md:text-2xl lg:text-4xl">
          <p className="px-4">"{ticket.peticion}"</p>
        </div>
        
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-r-md">
          <BoxTitle title="Uso" content={ticket.uso} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-md">
          <BoxTitle title="Medio Origen" content={ticket.medio_origen} />
        </div>
        <div className="row-span-2 col-span-2 bg-white bg-opacity-60 rounded-l-md">
          <BoxTitle title="Fecha Limite" content={ticket.fecha_limite} />
        </div>

        
        <div className="row-span-1 col-span-3 bg-white bg-opacity-40 rounded-r-md rounded-b-md">
          <BoxTitle title="Levanta" content={ticket.levanta_ticket} />
        </div>
        <div className="row-span-1 col-span-3 bg-white bg-opacity-40 rounded-l-md rounded-b-md">
          <BoxTitle title="Solicita" content={ticket.cliente_solicita} />
        </div>
      </div>
    </div>

 */
