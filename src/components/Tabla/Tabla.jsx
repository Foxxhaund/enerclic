import { useOptionsContext } from "../../context/OptionsContext";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { labelsX, valoresX, nombreX } from "../../services/buildTables";
import moment from "moment";
import { Box } from "@mui/material";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
export default function Tabla() {
  const { datos } = useOptionsContext();
  const { included } = datos;
  const NOMBRES = nombreX(included);
  const VALORES = valoresX(included);
  const LX = labelsX(included);
//Construccion de la Cabecera de la tabla
  let cols = [
    {
      field: "Nombre",
      headerName: "Nombre",
      width: 150,
      headerAlign: "center",
    },
  ];
  LX.map((lx, index) => {
    cols.push({
      field: `col${index}`,
      headerName: moment(lx).format("DD/MM/YYYY"),
      width: 200,
      headerAlign: "center",
    });
  });
//Relleno de la tabla con los valores extraidos de la API
  let rows = [];
  VALORES.map((V, index) => {
    let obj = { id: index, Nombre: NOMBRES[index] };
    for (let i = 0; i < V.length; i++) {
      if (V[i]) obj[`col${i}`] = V[i];
      else obj[`"col${i}"`] = V[i] = " ";
    }
    rows.push(obj);
    obj = {};
  });

  return (
    <Box sx={{ minHeight: 700, width: "100%", border: 1 }}>
      <DataGrid rows={rows} columns={cols} slots={{ toolbar: CustomToolbar }} />
    </Box>
  );
}
