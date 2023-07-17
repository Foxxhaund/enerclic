//import { useAuthContext } from "../context/AuthContext";
import Layout from "../comopnents/Layout/Layout";
import NavBar from "../comopnents/NavBar/NavBar";
import SelectDate from "../comopnents/SelectDate/SelectDate"
import Respuesta from "../comopnents/Respuesta/Respuesta";
import { Container, Grid } from "@mui/material";



export default function Data(){
    return (
    <Container maxWidth={'100%'}>
        <Grid container>
            <Grid item xs={12}>
                <Layout/>
            </Grid>
            <Grid item xs={12}>
                <NavBar/>
            </Grid>
            <Grid item xs={12}>
                <SelectDate/>
            </Grid>
            <Grid item xs={12}>
                <Respuesta/>
            </Grid>
        </Grid>
    </Container>
    )
}