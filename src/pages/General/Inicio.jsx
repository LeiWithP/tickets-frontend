import React from "react";
import { useState } from "react";
import { TicketCard } from "../../components/Card/TicketCard";
//import { Tabs } from "flowbite-react";
import { Card } from "flowbite-react";
import { Tabs, Tab } from "../../components/Tabs/Tabs";
import {
  RadialBarChart,
  RadialBar,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import randomColor from "randomcolor";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { data1, data2, data3, data4 } from "../../Data/DataCharts";

import { Facebook, WhatsApp, Instagram, LinkedIn } from "@mui/icons-material";

import FormTicket from '../Views/FormTicket';

const Inicio = () => {
  const [activeCompany, setIsTable] = useState(false);
  const [dataRev, setDataRev] = useState();
  const [dropVal, setDropVal] = React.useState("");

  const handleChange = (event) => {
    setDropVal(event.target.value);
  };

  const handleDataRev = (object) => {
    setDataRev(object);
  };

  const handleSelecDataRev = (object) => {
    if (object.title == "1983") {
      handleDataRev(data1);
    } else {
      handleDataRev(data1);
    }
  };

  const formData = {
    peticion: 'Peticion',
    lastName: 'Doe',
    country: 'usa',
    fechaEntrega: '2022-05-16T00:00:00.000Z'
  };

  return (
    <>
      <div>
        <Tabs>
          <Tab label="Revision de Clientes ">
            <div className="flex w-full bg-white shadow-lg rounded-lg overflow-y-auto flex-col lg:flex-row">
              <div className="w-full py-4 px-8">
                <h1 className="text-lg font-bold mb-2 pb-2">Seguimiento</h1>

                <FormControl fullWidth sx={{ pb: 4 }}>
                  <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dropVal}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Cedema"}>Cedema</MenuItem>
                    <MenuItem value={"Cemacon"}>Cemacon</MenuItem>
                    <MenuItem value={"Like a Mom"}>Like a Mom</MenuItem>
                  </Select>
                </FormControl>

                <ChartRev data={data1} dropVal={dropVal} />

                <div className="flex item-center space-x-3 my-3">
                  <p class="mr-3 text-gray-700 font-bold text-md text">
                    {" "}
                    Medios:{" "}
                  </p>
                  {/*Codigo para medios*/}
                  <Facebook fontSize="large" />
                  <WhatsApp fontSize="large" />
                  <Instagram fontSize="large" />
                  <LinkedIn fontSize="large" />
                </div>

                <div className="flex item-center space-x-3 my-3">
                  <p class="mr-3 text-gray-700 font-bold text-md text">
                    {" "}
                    Responsable: Juan
                  </p>
                </div>
                <FormTicket formData={formData} />
              </div>
            </div>
          </Tab>
          <Tab label="Diseños por Cliente">
            <div className="flex w-full bg-white shadow-lg rounded-lg overflow-y-auto flex-col lg:flex-row">
              <div className="w-full py-4 px-8">
                <h1 className="text-lg font-bold mb-2 pb-2">
                  Diseños por Cliente Mensuales
                </h1>

                <ChartTicketM data={data2} />
              </div>
            </div>
          </Tab>
          <Tab label="Tickets por Cta">
            <div className="flex w-full bg-white shadow-lg rounded-lg overflow-y-auto flex-col lg:flex-row">
              <div className="w-full py-4 px-8">
                <h1 className="text-lg font-bold mb-2 pb-2">Seguimiento</h1>

                <FormControl fullWidth sx={{ pb: 4 }}>
                  <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dropVal}
                    label="Age"
                    onChange={handleChange}
                  >
                    {
                      /* Codigo para mostrar cada item*/
                    }
                    <MenuItem value={"Asignado"}>Asignado</MenuItem>
                    <MenuItem value={"Cancelado por GS"}>Cancelado por GS</MenuItem>
                    <MenuItem value={"Canceló Cliente"}>Canceló Cliente</MenuItem>
                    <MenuItem value={"Correciones"}>Correciones</MenuItem>
                    <MenuItem value={"En Autorización Cliente"}>En Autorización Cliente</MenuItem>
                    <MenuItem value={"En espera de información"}>En espera de información</MenuItem>
                    <MenuItem value={"Pausa por Cliente"}>Pausa por Cliente</MenuItem>
                    <MenuItem value={"Proceso"}>Proceso</MenuItem>
                    <MenuItem value={"Registrado"}>Registrado</MenuItem>
                    <MenuItem value={"Revisión por Diseño"}>Revisión por Diseño</MenuItem>
                    <MenuItem value={"Terminado"}>Terminado</MenuItem>
                    <MenuItem value={"Total General"}>Total General</MenuItem>

                  </Select>
                </FormControl>

                <ChartTicketCta data={data3} dropVal={dropVal} />

              </div>
            </div>
          </Tab>
          <Tab label="Tickets por Responsable">
            <div className="flex w-full bg-white shadow-lg rounded-lg overflow-y-auto flex-col lg:flex-row">
              <div className="w-full py-4 px-8">
                <h1 className="text-lg font-bold mb-2 pb-2">Seguimiento</h1>

                <FormControl fullWidth sx={{ pb: 4 }}>
                  <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dropVal}
                    label="Age"
                    onChange={handleChange}
                  >
                    {
                      /* Codigo para mostrar cada responsable*/
                    }
                    <MenuItem value={"Asignado"}>Asignado</MenuItem>
                    <MenuItem value={"Cancelado por GS"}>Cancelado por GS</MenuItem>
                    <MenuItem value={"Correciones"}>Correciones</MenuItem>
                    <MenuItem value={"En Autorización Cliente"}>En Autorización Cliente</MenuItem>
                    <MenuItem value={"Pausa por Cliente"}>Pausa por Cliente</MenuItem>
                    <MenuItem value={"Proceso"}>Proceso</MenuItem>
                    <MenuItem value={"Registrado"}>Registrado</MenuItem>
                    <MenuItem value={"Revisión por Diseño"}>Revisión por Diseño</MenuItem>
                    <MenuItem value={"Total General"}>Total General</MenuItem>

                  </Select>
                </FormControl>

                <ChartTicketResp data={data4} dropVal={dropVal} />

              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

const ChartRev = ({ data, dropVal }) => {
  /*const rowCount = data.length - 1;
  const aspect = 15 / rowCount;*/

  const renderLineChart = (
    <ResponsiveContainer height="70%" width="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dropVal} fill={randomColor()} />
      </BarChart>
    </ResponsiveContainer>
  );

  return renderLineChart;
};

const ChartTicketM = ({ data }) => {
  /*const rowCount = data.length - 1;
  const aspect = 15 / rowCount;*/
  const empresas = ["Cedema", "Cemacon", "Canavi"];
  console.log(randomColor());

  const renderLineChart = (
    <ResponsiveContainer height="93%" width="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          label={{ value: "Fecha de Entrega", position: "outside", offset: 0 }}
        />
        <YAxis
          label={{ value: "Actividades", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        {empresas.map((dropVal) => (
          <Line type="monotone" dataKey={dropVal} stroke={randomColor()} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );

  return renderLineChart;
};

const ChartTicketCta = ({ data, dropVal }) => {
  /*const rowCount = data.length - 1;
  const aspect = 15 / rowCount;*/
  const empresas = ["Cedema", "Cemacon", "Canavi"];
  console.log(randomColor());

  const renderLineChart = (
    <ResponsiveContainer height="80%" width="100%">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey={dropVal}
        />

        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="top"
          align="right"
        />
        <Tooltip active={false} />
      </RadialBarChart>
    </ResponsiveContainer>
  );

  return renderLineChart;
};

const ChartTicketResp = ({ data, dropVal }) => {
  /*const rowCount = data.length - 1;
  const aspect = 15 / rowCount;*/

  const renderLineChart = (
    <ResponsiveContainer height="80%" width="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dropVal} fill={randomColor()} />
      </BarChart>
    </ResponsiveContainer>
  );

  return renderLineChart;
};

export default Inicio;
