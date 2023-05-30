import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";


const columns2 = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "empresa",
    headerName: "Empresa",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "peticion",
    headerName: "Peticion",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "medioOrigen",
    headerName: "Medio Origen",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "levantaTicket",
    headerName: "Levanta Ticket",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "clienteSolicita",
    headerName: "Cliente Solicita",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "fechaLimite",
    headerName: "Fecha Limite",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "prioridad",
    headerName: "Prioridad",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "fechaSolicitud ",
    headerName: "Fecha Solicitud ",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "servidorUbicacion",
    headerName: "Servidor Ubicacion",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "actividad",
    headerName: "Actividad",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "uso",
    headerName: "Uso",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "encargado",
    headerName: "Encargado",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "apoyo",
    headerName: "Apoyo",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "estado",
    headerName: "Estado",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "fechaEntrega",
    headerName: "Fecha Entrega",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "infoCliente",
    headerName: "Info cliente",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "observaciones",
    headerName: "Observaciones",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "correcciones",
    headerName: "Correcciones",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "error",
    headerName: "Error",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "tipoError",
    headerName: "Tipo error",
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
