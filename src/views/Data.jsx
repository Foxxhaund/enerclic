//import { useAuthContext } from "../context/AuthContext";
import Layout from "../comopnents/Layout/Layout";
import NavBar from "../comopnents/NavBar/NavBar";
import SelectDate from "../comopnents/SelectDate/SelectDate"
import Respuesta from "../comopnents/Respuesta/Respuesta";



export default function Data(){
    return (
    <>
        <Layout/>
        <NavBar/>
        <SelectDate/>
        <Respuesta/>
        
    </>
    )
}