import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import ActivityTag from "../Tag/ActivityTag";
import StateTag from "../Tag/StateTag";

const DraggableParrilla = ({ onClick, parrilla, index }) => {
  return (
    <Draggable draggableId={parrilla.id} index={index}>
      {(draggableProvided) => (
        <div
          onClick={onClick}
          className={`mx-2 mb-4 p-2 h-fit bg-primary bg-opacity-20 rounded-md hover:scale-95 flex flex-col shadow-md`}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <div className="bg-slate-000 flex pb-2 border-b border-secondary overflow-hidden">
            <p className="px-1 bg-extra text-white rounded-lg">{parrilla.id}</p>
            <p className="ml-4 font-semibold overflow-hidden">{parrilla.empresa}</p>
          </div>
          <div className="bg-slate-000 flex pb-1 pt-2 overflow-hidden">
            <StateTag state="urgente" />
            <ActivityTag activity="Edición Fotografía" />
          </div>
          <div className="bg-slate-000 flex text-sm h-auto overflow-hidden">
            {parrilla.tema}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableParrilla;
