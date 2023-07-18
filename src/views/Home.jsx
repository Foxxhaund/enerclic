import { Box, Container, Grid } from "@mui/material";
import logo from "../assets/logoenerclic.jpg";
import portada from "../assets/portada.jpg";
import Login from "../components/Login/Login";

export default function Home() {
  return (
    <Container
      sx={{
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component={"img"}
          src={logo}
          alt="enerclic"
          sx={{ width: 500, margin: "0 auto" }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box
            p={4}
            component={"img"}
            src={portada}
            alt="portada enerclic"
            sx={{ width: 585, height: "auto" }}
          />

          <Box p={4} sx={{ width: "100%" }}>
            <Login />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
