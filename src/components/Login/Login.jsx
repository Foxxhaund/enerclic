//Componente correspondiente al formulario de Login
import { Stack, Typography, TextField, Button, Alert } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const { login, errorMessage } = useAuthContext();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  
  function handleInputs(e) {
    setUser((currentUser) => ({
      ...currentUser,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <Typography variant="h4" align="center" pb={3}>
        Inicia sesión
      </Typography>
      <form onSubmit={(e) => login(e, user)}>
        <Stack spacing={3}>
          <TextField
            label="Nombre"
            variant="outlined"
            size="small"
            name="username"
            value={user.username}
            onChange={handleInputs}
          />
          <TextField
            label="Password"
            variant="outlined"
            size="small"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#ffffff",
              border: "3px solid #000000",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Iniciar sesión
          </Button>
        </Stack>
      </form>
      {errorMessage && (
        <Alert variant="filled" severity="error">
          {errorMessage}
        </Alert>
      )}
    </>
  );
}
