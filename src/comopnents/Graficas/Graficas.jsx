
import { useOptionsContext } from "../../context/OptionsContext"
import { Box } from "@mui/material";
import Barras from "./Barras/Barras";
import { buildColores, labelsX, valoresX, nombreX, porcentajeX } from '../../services/buildTables';




export default function Graficas(){
    const {datos} = useOptionsContext()
    const {included} = datos
    
    const COLORES = buildColores(included) 
    const NOMBRES = nombreX(included)
    const VALORES = valoresX(included)
    const LX = labelsX(included)
    const PORCENTAJE = porcentajeX(included)
    
    
    

    return(
    <Box>
        {(VALORES != 1) ? (
        <Box >
            <Box>
                <Barras labels={LX} totales={VALORES} nombres={NOMBRES} colores={COLORES}/>
            </Box>
            <Box>
                <Barras labels={LX} totales={PORCENTAJE} nombres={NOMBRES} colores={COLORES}/>
            </Box>
        </Box> ):(<p>No hay valores ha mostrar</p>)}
         
    </Box>


    )
}