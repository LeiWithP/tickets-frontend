import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";


const columns2 = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "fecha",
    headerName: "Fecha",
    width: 200,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "objetivo",
    headerName: "Objetivo",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "tema",
    headerName: "Tema",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "copy",
    headerName: "Copy",
    width: 250,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "diseño",
    headerName: "Diseño",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "nuevo",
    headerName: "Nuevo",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "republicacion",
    headerName: "Republicacion",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "link",
    headerName: "Link del Diseño",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "contenido",
    headerName: "Tipos de contenido",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "plataforma",
    headerName: "Plataforma",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "elaborado",
    headerName: "Elaborado por",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "numTicket",
    headerName: "#Ticket",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
];

export default function DataTable({ tickets }) {
  const getRowClassName = (params) => {
    // Conditionally apply CSS class based on data
    /*if (params.row.age > 28) {
      return "table-header";
    }*/
    return "table-content";
  };

  return (
    <div style={{ height: "90%", width: "100%" }}>
      <DataGrid
        rows={tickets}
        columns={columns2}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        getRowClassName={getRowClassName}
        headerClassName="bold-header"
        sx={{
          boxShadow: 3,
          border: 0,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .table-header": {
            backgroundColor: "rgba(44, 122, 123, 1)",
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          "& .table-content": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            fontWeight: "light",
            display: 'flex',
            alignItems: 'center',
          },
        }}
      />
    </div>
  );
}
