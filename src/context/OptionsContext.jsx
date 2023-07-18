import { useContext, useState, createContext } from "react";

const OptionsContext = createContext({
  selectedWid: null,
  setSelectedWid: () => {},
  initDate: '',
  SetInitDate: () => {},
  endDate: '',
  SetEndDate: () => {},
  truck: '',
  setTruck: () => {},
  datos: null,
  setDatos: () => {},
  getDatos:() => {},
}); 


export default function OptionsContextProvider({ children }) {
  const [selectedWid, setSelectedWid] = useState('');
  const [initDate,SetInitDate] = useState('')
  const [endDate,SetEndDate] = useState('')
  const [truck,setTruck] = useState('')
  const [datos,setDatos] = useState(null)


  //Construcción de la URL para obtener los datos de energia
  const URL = `${import.meta.env.VITE_API_URL}${selectedWid.lang}/datos/${selectedWid.category}/${selectedWid.widget}?start_date=${initDate}&end_date=${endDate}&time_trunc=${truck}`
  //Llamada a API Energía
  async function getDatos(){
    const response = await fetch(URL)
    setDatos(await response.json())
  }
  
  const value = {
    selectedWid,
    setSelectedWid,
    initDate,
    SetInitDate,
    endDate,
    SetEndDate,
    truck,
    setTruck,
    datos,
    setDatos,
    getDatos,
  };

  return <OptionsContext.Provider value={value}>{children}</OptionsContext.Provider>;
}

export function useOptionsContext() {
  return useContext(OptionsContext);
}
