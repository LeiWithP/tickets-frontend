import React from "react";
import StateTag from "../Tag/StateTag";
import ActivityTag from "../Tag/ActivityTag";

export const TicketCard = () => {
  return (
    <div
      // onClick={onClick}
      className={`mx-2 mb-4 p-2 h-fit bg-gradient-to-br from-primary to-teal-200 rounded-md hover:scale-95 flex flex-col shadow-md`}
    >
      <div className="bg-slate-000 flex pb-2">
        <p className="px-0.5 bg-teal-200 rounded-lg">ID</p>
        <p className="ml-4 font-semibold">empresa</p>
      </div>
      <div className="bg-slate-000 flex pb-1">
        <StateTag state="Urgente" />
        <ActivityTag activity="Edición" />
      </div>
      <div className="bg-slate-000 flex text-sm h-auto">Ticket en proceso a most</div>
    </div>
  );
};
