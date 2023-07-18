import { InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from "react";
import { useOptionsContext } from "../../context/OptionsContext";
import moment from "moment";

export default function SelectDate() {
  const { SetInitDate, SetEndDate, setTruck } = useOptionsContext();
  const [iDate, setIDate] = useState(moment());
  const [eDate, setEDate] = useState(moment());
  const [periodo, setPeriodo] = useState("hour");

  useEffect(() => {
    const fechainitformat = moment(iDate).format("YYYY-MM-DDTHH:MM");
    SetInitDate(fechainitformat);
  }, [iDate]);

  useEffect(() => {
    const fechaendtformat = moment(eDate).format("YYYY-MM-DDTHH:MM");
    SetEndDate(fechaendtformat);
  }, [eDate]);
  useEffect(() => {
    setTruck(periodo);
  }, [eDate]);

  const handleChange = (e) => {
    setPeriodo(e.target.value);
    setTruck(e.target.value);
  };

  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          sx={{ width: "100%" }}
          value={iDate}
          label="Fecha de Inicio"
          onChange={(newDate) => setIDate(newDate)}
        />

        <DatePicker
          sx={{ width: "100%" }}
          value={eDate}
          label="Fecha de Fin"
          onChange={(newDate) => setEDate(newDate)}
        />
      </LocalizationProvider>

      <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="truck-label">Intervalo</InputLabel>
        <Select
          fullWidth
          name="truck"
          labelId="truck-label"
          id="truck-select"
          value={periodo}
          onChange={handleChange}
        >
          <MenuItem value={"hour"} defaultChecked>
            Hora
          </MenuItem>
          <MenuItem value={"day"}>Día</MenuItem>
          <MenuItem value={"month"}>Mes</MenuItem>
          <MenuItem value={"year"}>Año</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
