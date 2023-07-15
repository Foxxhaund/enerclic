import {Grid,Box} from '@mui/material'
import { useAuthContext } from "../../context/AuthContext";


export default function Layout() {
    const { logout } = useAuthContext();

    function handleClick(){
        logout()
    }

    return (
       
    <Box className="navmain">

        <Grid container spacing={2} sx={{pt:2,backgroundColor:"white"}}>
            <Grid item xs={2} sx={{ img: { width: "80%",pb:"1rem",pt:"1rem" } }} >
                <img src="../../src/assets/logo.jpg" />

            </Grid>
            <Grid item xs={10} sx={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
                <button onClick={handleClick}>logout</button>   
            </Grid>     
        </Grid>
    </Box>
        
    )
}