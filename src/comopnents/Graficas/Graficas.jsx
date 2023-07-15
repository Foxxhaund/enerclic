import { Bar } from "react-chartjs-2";
import { useOptionsContext } from "../../context/OptionsContext"
import { Box, Grid } from "@mui/material";
import { buildLabels, buildLineValues, buildColores, buildValueLabels, buildDescription, buildTotales } from '../../services/buildTables';


export default function Graficas(){
    const {datos} = useOptionsContext()
    const {data,included} = datos
    let dataset = []

    //Valores para lineas
    const LABELS = buildLabels(included) //datos para el eje x
    
    const VALUES = buildLineValues(included)//datos para el eje y
   
    const VALUE_LABELS = buildValueLabels(included)//etiquetas de lineas de grafica
   
    //valores para barras
    const COLORES = buildColores(included) //colores de la grafica
   
    const TOTALES = buildTotales(included) //valores totales
    
    const LASTUPDATE = buildDescription(included)
    
    // VALUES.map((V,index) => {
    //     console.log(V,"ESTO ES V")
    //     dataset.push[
    //         {
                
    //         }
    //     ]
    // })
    // VALUES.map((v,index)=>{
    //     dataset.push({
    //         label: index,
    //         data: VALUES,
    //         borderColor: COLORES[index],
    //         backgroundColor: COLORES[index]
    //     })
    // })
    dataset = {
        label: "totales",
        data: TOTALES,
        borderColor: COLORES[0],
        backgroundColor: COLORES[0],
    } 
   
    const chartData = {
        labels: VALUE_LABELS,
        datasets:[dataset]
    }

    return(
    <Box>
        <Box>
            <h3>Tipo: {data.type}</h3>
            <p>Descripcion: {data.attributes.description}</p>
        </Box>
        <Box>
            <Box>
            <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Visualizaciones de perfil por año",
                },
              },
            }}
          />





            </Box>
            <Box>
                
            </Box>
        </Box>  
    </Box>


    )
}