//Construcción de las gráficas de valores y porcentajes con
//sus selectores para gráficas de lineas o barras

import { useMemo, useState } from "react"
import { Bar, Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useOptionsContext } from "../../../context/OptionsContext"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from 'chart.js';

  ChartJS.register(CategoryScale,LinearScale,PointElement,BarElement,LineElement,Title,Tooltip,Legend,Filler)
export default function Barras({labels,totales,nombres,colores,tipoGrafica}){
    const { datos } = useOptionsContext()
    const { data } = datos
    const [tipoG, setTipoG] = useState(0)
    let datas = []

    const options = {
        fill:false,
        responsive:true,
        tension: 0.3,
        plugins:{
            legend:{
                display:true,
            },
            title: {
                display: true,
                text: `${data.type} ${tipoGrafica}`,
              }
        },
      }

    nombres.map((n,index) =>{
        datas.push({
            label: n,
            data: totales[index],
            borderColort: colores[index],
            pointRadius: 6,
            backgroundColor: colores[index],
            
        })
    })
 
    const dataG = useMemo(() =>{
        return{
            datasets:datas,
            labels: labels,
        }
    },[datas])


    const handleChangeTipo = (e) =>{
        setTipoG(e.target.value)
    }

    return (
    <>
        
            <Box md={12} sx={{justifyContent: "center"}}>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="buttons-group"
                    name="radio"
                    onChange={handleChangeTipo}
                    defaultValue={0}
                >
                    <FormControlLabel value={0} control={<Radio />} label={"Barras"} />
                    <FormControlLabel value={1} control={<Radio />} label={"Lineas"}  />
                </RadioGroup>
            </FormControl>
            </Box>
        
    {
        (tipoG == 0) ? (<Bar data={dataG} options={options}/>):(<Line data={dataG} options={options}/>)
    }
    
    </>)
}