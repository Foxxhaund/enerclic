import { Box, Grid } from "@mui/material";
import logo from "../assets/logoenerclic.jpg";
import portada from "../assets/portada.jpg";
import ResponsiveImage from "../comopnents/ui/ResponsiveImage";
import Login from "../comopnents/Login/Login";


export default function Home() {
  return (
    <Grid container sx={{ backgroundColor: "#ffffff" }}>
      <Grid container item xs={12}>
        <Box position="absolute" top={0} left={226} width="50%">
          <ResponsiveImage
            src={logo}
            alt="enerclic"
            sx={{ width: 500 }}
            centered
          />
        </Box>

        <Grid item md={6} display="flex" alignContent="center" height="100vh">
          <ResponsiveImage
            src={portada}
            alt="portada enerclic"
            sx={{ width: 585, height: "auto" }}
            centered
          />
        </Grid>
        <Grid item md={6}>
          <Box p={12} mt={15}>
            <Login />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
