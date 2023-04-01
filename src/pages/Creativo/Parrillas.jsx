import React from "react";
import { useState } from "react";
import { Draggable, Droppable, DragDropContext } from "@hello-pangea/dnd";
import { Reorder } from "@mui/icons-material";
import { list } from "postcss";

const tareasIniciales = [
  {
    id: "1",
    text: "tarea 1",
  },
  {
    id: "2",
    text: "tarea 2",
  },
  {
    id: "3",
    text: "tarea 3",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Parrillas = () => {
  const [tareas, setTareas] = useState(tareasIniciales);
  // tareas.map((t) => console.log(t));
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }

        setTareas((prevTareas) =>
          reorder(prevTareas, source.index, destination.index)
        );
      }}
    >
      <div className="text-center">
        <h1>Nombre</h1>
        <Droppable droppableId="tareas">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="m-0 list-none p-5 border-4 inline-flex flex-col"
            >
              {tareas.map((tarea, index) => (
                <Draggable key={tarea.id} draggableId={tarea.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="shadow-md text-center p-2 m-20 border-4 border-secondary"
                    >
                      {tarea.text}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Parrillas;
