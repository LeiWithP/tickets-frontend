import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";


const columns2 = [
  {
    field: "id",
    headerName: "ID",
    width: 130,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "usuario",
    headerName: "Usuario",
    width: 200,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 200,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "apellidos",
    headerName: "Apellidos",
    width: 200,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "correo",
    headerName: "Correo",
    width: 200,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "rol",
    headerName: "Rol",
    width: 200,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "activo",
    headerName: "Activo",
    width: 200,
    headerClassName: "table-header",
    headerAlign: "left",
  },
  {
    field: "ultimaConexion",
    headerName: "Ultima Conexion",
    width: 200,
    headerClassName: "table-header",
    headerAlign: "left",
  },
];

export default function DataTable({ usuarios }) {
  const getRowClassName = (params) => {
    // Conditionally apply CSS class based on data
    /*if (params.row.age > 28) {
      return "table-header";
    }*/
    return "table-content";
  };

  return (
    <div style={{ height: "90%", width: 'auto'}}>
      <DataGrid
        rows={usuarios}
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
