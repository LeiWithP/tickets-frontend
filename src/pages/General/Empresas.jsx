import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import {tareasIniciales, tareasNoIniciales, initialUsers, movies, } from "../../Data/TestData";
import { empresasInfo } from "../../Data/DataEmpresas";
import TwoColSwitch from "../../layouts/TwoColSwitch";
import { reorder } from "../../components/DnD/Management";
import EmpresasView from "../Views/EmpresasView";
import TableEmpresas from "../../components/Tables/TableEmpresas";
import DraggableEmpresa from "../../components/DnD/DraggableEmpresa";
import TableHeader from "../../components/Tables/TableHeader";
import TableSection from "../../components/Tables/TableSection";

const Empresas = () => {
  const [tickets, setTickets] = useState(empresasInfo);
  //const [users, setusers] = useState(initialUsers);
  const [empresas, setEmpresas] = useState(empresasInfo);

  const [parrillaName, setParrillaName] = useState();

  const [activeUser, setActiveUser] = useState();
  const [activeTicket, setActiveTicket] = useState();
  const [activeParrilla, setActiveParrilla] = useState(false);
  const [activeButton, setActiveButton] = useState();

  const handleCardClick = (buttonId, object) => {

    setActiveButton(buttonId);
    buttonId === "empresa"
      ? setActiveTicket(object)
      : buttonId === "user"
        ? setActiveUser(object)
        : console.log("Id unknow");

    /*
  if (activeButton == buttonId) {
    setActiveButton("")
    console.log(object)
  }
  else {
    setActiveButton(buttonId)
    buttonId === "Parrillas"
      ? setActiveTicket(object)
      : console.log("Id unknow")
    console.log("else")
  }*/
  };


  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!result.destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    if (result.destination.droppableId === "empresa")
      setTickets((prevTickets) =>
        reorder(prevTickets, source.index, destination.index)
      );
    // if (result.destination.droppableId === "1")
    //   setusers((prevUsers) => deleteCard(prevUsers, source.index));
    // const items = Array.from(tickets);
    // const [reorderedItem] = items.splice(result.source.index, 1);

    // if (result.destination.droppableId === "users") {
    //   setCreativos((creativos) => [...creativos, reorderedItem]);
    // } else {
    //   items.splice(result.destination.index, 0, reorderedItem);
    //   setTickets(items);
    // }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TwoColSwitch
        name="Empresas"
        leftChild={
          activeParrilla === true ? (
            <>
              <h2 className="m-2 text-center font-bold">{parrillaName}</h2>
              <div>
                <Droppable droppableId="empresa">
                  {(droppableProvided) => (
                    <ul
                      {...droppableProvided.droppableProps}
                      ref={droppableProvided.innerRef}
                      className="flex flex-col"
                    >
                      {empresas.map((empresa, index) => (
                        <DraggableEmpresa
                          key={empresa.id}
                          onClick={() => handleCardClick("empresa", empresa)}
                          empresa={empresa}
                          index={index}
                        />
                      ))}
                      {droppableProvided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </div>
            </>
          ) : (
            <p className="m-2 text-center self-center font-light">
              Selecciona una Empresa
            </p>
          )
        }
        rightChild={
          activeButton === "empresa" ? (
            <EmpresasView empresa={activeTicket} />
          ) : activeButton === "user" ? (
            <p className="m-2 text-center self-center font-light">
              User {activeUser.id}
            </p>
          ) : (
            <p className="m-2 text-center self-center font-light">
              <table id="excel-table">
<thead>
<tr>
<th>&nbsp;</th>
<TableHeader column="ID" />
<TableHeader column="Cliente/Nombre de la empresa" />
<TableHeader column="Petición/Actividad" />
</tr>
</thead>
<tbody>
<tr>
<th></th>
<td>1</td>
<td>CEMACON</td>
<td>Diseño de Portada Enero Genérico</td>
</tr>
<tr>
<th></th>
<td>1</td>
<td>CEMACON</td>
<td>Cambio de Portadas Enero</td>
</tr>
<tr>
<th></th>
<td>3</td>
<td>CANAVI</td>
<td>Diseño de día del enfermero</td>
</tr>
<tr>
<th></th>
<td></td>
<td></td>
<td></td>
</tr>
<br/>
              <button className="bg-gradient-to-bl from-primary to-blue-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
                Agregar Empresa
              </button>
            
            <br/>

              <button className="bg-gradient-to-bl from-primary to-yellow-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
                Editar
              </button>

          <br/>

              <button className="bg-gradient-to-bl from-primary to-red-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
                Eliminar
              </button>

        
</tbody>
</table>
            </p>
          )
        }
        swap={

          activeParrilla === true ? (
            <>
              <TableEmpresas empresa={empresas} />
            </>
          ) : (
            <p className="m-2 text-center self-center font-light">
              Selecciona una Empresas
            </p>
          )
        }
        // Aquí va para poner el formData de Empresas y aparezca al dar click en Crear
      />
      {
      }
    </DragDropContext>
  );
};

export default Empresas;
