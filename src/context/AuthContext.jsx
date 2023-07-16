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
