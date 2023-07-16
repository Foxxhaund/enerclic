import { useMemo, useState } from "react"
import { Bar, Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
  } from 'chart.js';


  const options = {
    responsive:true,
  }

  ChartJS.register(CategoryScale,LinearScale,PointElement,BarElement,LineElement,Title,Tooltip,Legend)
export default function Barras({labels,totales,nombres,colores}){
    const [election, setElection] = useState(0)
    const [tipoG, setTipoG] = useState(0)
    let datas = []
    console.log(labels)
    console.log(totales)
    console.log(nombres)
    console.log(colores)
    nombres.map((n,index) =>{
        datas.push({
            label: n,
            data: totales[index],
            backgroundColor: colores[index],
            borderColort: colores[index],
        })
    })
 
    const data = useMemo(() =>{
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
        
            <Box md={6} sx={{justifyContent: "center"}}>
            <FormControl>
                    <FormLabel id="buttons-group">Tipo de Gáfica</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="buttons-group"
                        name="radio"
                        onChange={handleChangeTipo}
                    >
                        <FormControlLabel value={0} control={<Radio />} label={"Barras"} />
                        <FormControlLabel value={1} control={<Radio />} label={"Lineas"} />
                    </RadioGroup>
                </FormControl>

            </Box>
        
    {
        (tipoG == 0) ? (<Bar data={data} options={options}/>):(<Line data={data} options={options}/>)
    }
    
    </>)
}