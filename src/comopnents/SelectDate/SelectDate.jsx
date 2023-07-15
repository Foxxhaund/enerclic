import { InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, useEffect } from 'react'
import { useOptionsContext } from "../../context/OptionsContext"
import moment from "moment"

export default function SelectDate(){
    const { SetInitDate, SetEndDate, setTruck, getDatos } = useOptionsContext()
    const [iDate, setIDate] = useState(moment())
    const [eDate, setEDate] = useState(moment())
    const [periodo,setPeriodo] = useState('hour')
    
    useEffect(()=>{
        const fechainitformat = moment(iDate).format("YYYY-MM-DDTHH:MM")
        SetInitDate(fechainitformat)
    },[iDate])

    useEffect(()=>{
        const fechaendtformat = moment(eDate).format("YYYY-MM-DDTHH:MM")
        SetEndDate(fechaendtformat)
    },[eDate])
    useEffect(()=>{
        setTruck(periodo)
    },[eDate])

    const handleChange = (e) => {
        setPeriodo(e.target.value)
        setTruck(e.target.value)
      }

    

    return(
    <div>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker value={iDate} label="Fecha de Inicio" onChange={(newDate) => setIDate(newDate)}/>
      <DatePicker value={eDate} label="Fecha de Fin" onChange={(newDate) => setEDate(newDate)}/>
    </LocalizationProvider>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="truck-label">Intervalo</InputLabel>
        <Select
          name="truck"
          labelId="truck-label"
          id="truck-select"
          value={periodo}
          onChange={handleChange}
        >
          <MenuItem value={"hour"} defaultChecked>Hora</MenuItem>
          <MenuItem value={"day"}>Día</MenuItem>
          <MenuItem value={"month"}>Mes</MenuItem>
          <MenuItem value={"year"}>Año</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={getDatos}>Enviar Petición</Button>
    </div>
    )
}