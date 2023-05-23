import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import ActivityTag from "../Tag/ActivityTag";
import PriorityTag from "../Tag/PriorityTag";
import StateTag from "../Tag/StateTag";

const DraggableTicket = ({ onClick, ticket, index }) => {
  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(draggableProvided) => (
        <div
          onClick={onClick}
          className={`mx-2 mb-4 p-2 h-fit bg-primary bg-opacity-20 rounded-md hover:scale-95 flex flex-col shadow-md`}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <div className="bg-slate-000 flex pb-2 border-b border-secondary overflow-hidden">
            <p className="px-1 bg-extra text-white rounded-lg">{ticket.id}</p>
            <p className="ml-4 font-semibold overflow-hidden">{ticket.empresa}</p>
          </div>
          <div className="bg-slate-000 flex pb-1 pt-2 overflow-hidden">
            <PriorityTag priority={ticket.prioridad} />
            <ActivityTag activity={ticket.actividad} />
            <StateTag state={ticket.estado} />
          </div>
          <div className="bg-slate-000 flex text-sm h-auto overflow-hidden">
            {ticket.peticion}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableTicket;
