import { useContext, useState, createContext } from "react";

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  user: null,
  errorMessage: "",
});
const ENERCLIC = "ENERCLIC";

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem(ENERCLIC)) ?? null
  );
  const [errorMessage, setErrorMessage] = useState(null);
  //función login con la que optenemos el "token" para la autorización a consultar datos
  async function login(e, u) {
    e.preventDefault();
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: "POST",
      body: JSON.stringify(u),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    if (data){
        setUser(data)
    }else{
        setErrorMessage("Las credenciales no son correctas");
    }
  }
  //Función logout
  function logout() {
    localStorage.removeItem(ENERCLIC);
    setUser(null);
  }

  const value = {
    user,
    login,
    logout,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
