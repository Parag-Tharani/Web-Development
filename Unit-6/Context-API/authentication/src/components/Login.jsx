import { Box, Button, FormControl, Grid, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import Theme from "./Theme";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const {handleToken, handleAuth } = React.useContext(AuthContext)

    const [ email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")


    const HandleLogin = () => {
        const payload = { email, password}

        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body: JSON.stringify(payload),
            headers:{
                'Content-Type':"application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.token){
                handleAuth()
                handleToken(res.token)
            }
        })
        .then((res) => {
            if(!res){
                console.log("no")
            }
        })
        .catch((err) => console.log(err))

    }

    return (
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            margin:'auto',
            width:'80%',
            marginTop:10,
        }}>
            <ThemeProvider theme={ Theme }>
            <FormControl>
                <Grid container direction={'column'} >
                <label style={{'fontSize':"23px", marginBottom:"12px"}}>Email:</label>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eve.holt@reqres.in"
                    />
                </Grid>
                <Grid container direction={'column'} >
                <label style={{'fontSize':"23px", margin:'15px 0px 12px 0px'}}>Password:</label>
                <TextField 
                    required
                    id="standard-adornment-password"
                    type={'password'}
                    value={password}
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="cityslicka"
                />
                </Grid>
                <Button variant="contained" sx={{marginTop:"20px"}} onClick={HandleLogin}>Login</Button>
            </FormControl>
            </ThemeProvider>
        </Box>
    )
}

export default Login