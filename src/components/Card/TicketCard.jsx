import React from "react";
import PriorityTag from "../Tag/PriorityTag";
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
        <PriorityTag priority="urgente" />
        <ActivityTag activity="Edición Fotografía" />
      </div>
      <div className="bg-slate-000 flex text-sm h-auto">Lorem ipsum, dolor sit amet consectetur</div>
    </div>
  );
};
