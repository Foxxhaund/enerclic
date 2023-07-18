//componente que se encarga de la renderización de las gráficas, de la tabla o 
//del mensaje de error obtenido de la llamada a la API Energia
import { useOptionsContext } from "../../context/OptionsContext"
import Graficas from "../Graficas/Graficas"
import Tabla from "../Tabla/Tabla"

export default function Respuesta(){
    const {datos} = useOptionsContext()
    return (
    (!datos) ? (<></>):(
        (datos.errors) ? (
            <div>
                {datos.errors.map((e,index) => <p key={index}>{e.detail}</p>)}
            </div>    
        ):(
        <>
        <Graficas/>
        <Tabla/>
        </>)
    ))
   
}