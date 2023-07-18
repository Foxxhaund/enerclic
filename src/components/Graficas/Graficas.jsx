//Componente donde se renderizan las gráficas o 
//mensaje si no se han obtenido datos de la llamada 
//a la API Energia

import { useOptionsContext } from "../../context/OptionsContext";
import { Box, Grid } from "@mui/material";
import BarrasLineas from "./Barras/BarrasLineas";
import {
  buildColores,
  labelsX,
  valoresX,
  nombreX,
  porcentajeX,
} from "../../services/buildTables";

export default function Graficas() {
  const { datos } = useOptionsContext();
  const { included } = datos;

  const COLORES = buildColores(included);
  const NOMBRES = nombreX(included);
  const VALORES = valoresX(included);
  const LX = labelsX(included);
  const PORCENTAJE = porcentajeX(included);

  return (
    <Box>
      {VALORES != 1 ? (
        <Grid container>
          <Grid item xs={12} md={12} sx={{ border: 1, p: 1 }}>
            <BarrasLineas
              labels={LX}
              totales={VALORES}
              nombres={NOMBRES}
              colores={COLORES}
              tipoGrafica={"Valores"}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ border: 1, p: 1 }}>
            <BarrasLineas
              labels={LX}
              totales={PORCENTAJE}
              nombres={NOMBRES}
              colores={COLORES}
              tipoGrafica={"Porcentajes"}
            />
          </Grid>
        </Grid>
      ) : (
        <p>No hay valores ha mostrar</p>
      )}
    </Box>
  );
}
