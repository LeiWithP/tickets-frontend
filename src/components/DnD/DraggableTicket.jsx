import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import ActivityTag from "../Tag/ActivityTag";
import StateTag from "../Tag/StateTag";

const DraggableTicket = ({ onClick, ticket, index }) => {
  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(draggableProvided) => (
        <div
          onClick={onClick}
          className={`mx-2 mb-4 p-2 h-fit bg-gradient-to-br from-primary to-teal-200 rounded-md hover:scale-95 flex flex-col shadow-md`}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <div className="bg-slate-000 flex pb-2">
            <p className="px-0.5 bg-teal-200 rounded-lg">{ticket.id}</p>
            <p className="ml-4 font-semibold">{ticket.empresa}</p>
          </div>
          <div className="bg-slate-000 flex pb-1">
            <StateTag state="urgente" />
            <ActivityTag activity="Edición Fotografía" />
          </div>
          <div className="bg-slate-000 flex text-sm h-auto">
            {ticket.peticion}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableTicket;
