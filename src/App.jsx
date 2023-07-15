import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import PrivateRoute from "./router/PrivateRoute"
import PublicRoute from "./router/PublicRoute"
import Home from "./views/Home"
import Data from "./views/Data"
import AuthContextProvider from "./context/AuthContext";
import OptionsContextProvider from "./context/OptionsContext";
import { HOME, DATA } from "./const/routes";


import './App.css'

function App() {
  

  return (
    <AuthContextProvider>
    <OptionsContextProvider>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          {/* Rutas publicas */}
          <Route element={<PublicRoute />}>
              <Route path={HOME} element={<Home />} />
          </Route>
          {/* Rutas privadas */}
          
            <Route element={<PrivateRoute />}>
              <Route path={DATA} element={<Data />} />
            </Route>
            
        </Routes>
      </BrowserRouter>
    </OptionsContextProvider>
    </AuthContextProvider>
  )
}

export default App
