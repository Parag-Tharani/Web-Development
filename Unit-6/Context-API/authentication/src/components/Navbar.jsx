import React from "react";
import { Box, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Theme from "./Theme";
import { AuthContext } from "../context/AuthContext";


const Navbar = () => {

    const { isAuth, token , handleLogout} = React.useContext(AuthContext)


    return (
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            margin:'auto',
            height:80,
            backgroundColor:'rgba(0, 0, 0, 0.288)'
        }}>
            <h1>NavBar</h1>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
            }}>
                <ThemeProvider theme={ Theme }>
                {isAuth?<p style={{fontSize:21, marginRight:'30px'}}>{ token }</p>:<p style={{fontSize:21,marginRight:"30px"}}>Login *False* </p>}
                <Button variant='outlined' size="medium" onClick={() => handleLogout() }>Toogle Login</Button>
                </ThemeProvider>
            </Box>
        </Box>
    )
}

export { Navbar }