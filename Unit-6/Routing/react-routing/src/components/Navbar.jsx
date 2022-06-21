import React from "react";
import { Box } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
// import Theme from "./Theme";
import { Link } from "react-router-dom";


const Navbar = () => {


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
                    <Link to="/" style={{'marginRight':"30px"}}>Home</Link>
                    <Link to={'/products'}>Products</Link>
            </Box>
        </Box>
    )
}

export { Navbar }