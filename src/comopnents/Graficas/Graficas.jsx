
import { useOptionsContext } from "../../context/OptionsContext"
import { Box } from "@mui/material";
import Barras from "./Barras/Barras";
import { buildColores, energias, labelsX, valoresX, nombreX } from '../../services/buildTables';

import { options} from "./utils/options"


export default function Graficas(){
    const {datos} = useOptionsContext()
    const {data,included} = datos
    let totales = []
    let valueLabels = []
    
    const TIPO = energias(included)
    const COLORES = buildColores(included) 
    const NOMBRES = nombreX(included)
    const VALORES = valoresX(included)
    const LX = labelsX(included)

    // totales.push(TIPO.map((t)=>{
    //     return(buildTotales(included,t))
    // }))
    // valueLabels.push(TIPO.map((t)=>{
    //     return(buildValueLabels(included,t))
    // }))
    

    return(
    <Box>
        <Box>
            <h3>Tipo: {data.type}</h3>
            <p>Descripcion: {data.attributes.description}</p>
        </Box>
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