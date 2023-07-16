
import { useOptionsContext } from "../../context/OptionsContext"
import { Box } from "@mui/material";
import Barras from "./Barras/Barras";
import { buildColores, labelsX, valoresX, nombreX } from '../../services/buildTables';




export default function Graficas(){
    const {datos} = useOptionsContext()
    const {included} = datos
    
    const COLORES = buildColores(included) 
    const NOMBRES = nombreX(included)
    const VALORES = valoresX(included)
    const LX = labelsX(included)
    
    
    

    return(
    <Box>
        {(VALORES != 1) ? (
        <Box>
            <Box>
                <Barras labels={LX} totales={VALORES} nombres={NOMBRES} colores={COLORES}/>
            </Box>
            <Box>
                
            </Box>
        </Box> ):(<p>No hay valores ha mostrar</p>)}
         
    </Box>


    )
}