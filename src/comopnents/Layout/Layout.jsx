import {Grid,Button} from '@mui/material'
import { useAuthContext } from "../../context/AuthContext";




export default function Layout() {
    const { logout } = useAuthContext();

    function handleClick(){
        logout()
    }

    return (
        <Grid container spacing={2} borderBottom={2} sx={{alignItems: 'center', desplay:'flex', mt: 1,backgroundColor:"white"}}>
            <Grid item xs={12} md={6} sx={{pt:1}}>
                <img width={300} src="../../src/assets/logoenerclick.png"/>

            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex'}}>
                <Button variant='contained' onClick={handleClick}>logout</Button>   
            </Grid>     
        </Grid>        
    )
}

//sx={{ img: { width: "80%",pb:"1rem",pt:"1rem" } }}