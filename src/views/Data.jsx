//import { useAuthContext } from "../context/AuthContext";
import Layout from "../components/Layout/Layout";
import NavBar from "../components/NavBar/NavBar";
import SelectDate from "../components/SelectDate/SelectDate";
import Respuesta from "../components/Respuesta/Respuesta";
import { Box, Button, Container, Grid } from "@mui/material";
import { useOptionsContext } from "../context/OptionsContext";

export default function Data() {
  const { getDatos } = useOptionsContext();

  return (
    <Container
      sx={{
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      <Layout />

      <NavBar />

      <SelectDate />

      <Box p={2}>
        <Button fullWidth variant="contained" onClick={getDatos}>
          Enviar Petición
        </Button>
      </Box>

      <Grid item xs={12}>
        <Respuesta />
      </Grid>
    </Container>
  );
}
