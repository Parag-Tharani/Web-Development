import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, TextField} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../Redux/Login/action";

export const Login = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const navigate = useNavigate()


    const { logedIn } = useSelector((state) => state.logedIn)
    const dispatch = useDispatch()

    const HandleLogin = () => {

        const payload = {email,password}
        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body: JSON.stringify(payload),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.token){
                dispatch(isLogin(true))
                localStorage.setItem("logIn_token",JSON.stringify(res.token))
                navigate('/')
            }
        })
        .catch((err) => console.log(err))
    }


    React.useEffect(() => {
        if(localStorage.getItem("logIn_token") && localStorage.getItem("logIn_token") !== null){
            dispatch(isLogin(true))
        }else{
            dispatch(isLogin(false))
        }
    },[dispatch,logedIn])

     return (
        <div id="login">
            <Link to="/" style={{textDecoration:"none"}}><Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{marginTop:5}}
            disabled={logedIn?false:true}
            >Home</Button></Link>

            <Box component="form" sx={{border:1, borderColor:"violet", borderRadius:5,marginTop:5,padding:5}}>
                <h2>Login Details</h2>
                <TextField label="Email" variant="filled" color="secondary" value={ email } onChange={(e) => setEmail(e.target.value)}></TextField><br/>
                <TextField label="Password" variant="filled" type={"password"} value={ password } onChange={(e) => setPassword(e.target.value)} color="secondary"></TextField><br/>
                <Button variant="contained" color="secondary" sx={{marginTop:3}} onClick={() => HandleLogin()}>Log In</Button>
            </Box>

        </div>
     )
}