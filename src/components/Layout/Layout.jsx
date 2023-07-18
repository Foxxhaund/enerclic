import { Grid, Button, Box } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { useOptionsContext } from "../../context/OptionsContext"; 

export default function Layout() {
  const { logout } = useAuthContext();
  const { setDatos } = useOptionsContext(); 

  function handleClick() {
    setDatos(null)
    logout();
  }

  return (
    <Grid
      container
      borderBottom={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"white"}
      mt={1}
    >
      <Box
        component="img"
        width={300}
        p={1}
        src="../../src/assets/logoenerclick.png"
      />

      <Button variant="contained" onClick={handleClick}>
        logout
      </Button>
    </Grid>
  );
}
