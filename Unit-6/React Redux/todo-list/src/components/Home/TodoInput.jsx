import React from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box, Button, Checkbox } from "@mui/material";
import { useDispatch  } from "react-redux";
import { getTodoData } from "../../Redux/Todo/action";
import { useNavigate } from "react-router-dom";


export const TodoInput = () => {

    const Search = styled('div')(({ theme }) => ({
        borderRadius: 4,
        backgroundColor: alpha(theme.palette.primary.main, 0.60),
        '&:hover':{
          backgroundColor: alpha(theme.palette.primary.main, 0.50),
        },
      }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'white',
        '& .MuiInputBase-input': {
          paddingTop:"8px",
          paddingLeft: `calc(${theme.spacing(2)})`,
          paddingRight: `calc(${theme.spacing(1)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '24ch',
            height:"4ch",
            '&:focus': {
              width: '30ch',
            },
          },
        },
      }));

      const AddButton = styled(Button)(({theme}) => ({
        backgroundColor: alpha(theme.palette.primary.main, 0.80),
        '&:hover':{
            backgroundColor: alpha(theme.palette.primary.main, 0.85),
          },
      }))





    
    const dispatch = useDispatch()  
    const navigate = useNavigate()

    const fetchData = () => {
        fetch(`http://localhost:8080/todos`)
        .then((res) => res.json())
        .then((res) => dispatch(getTodoData(res)))
        .catch((err) => console.log(err))
    }

    const HandleAdd = () => {

        var addInputValue = document.getElementById("addInput").value
        var checked = document.getElementById("checked").checked

        const payload={
            title: addInputValue,
            status: checked
        }

        fetch(`http://localhost:8080/todos`,{
            method:"POST",
            body: JSON.stringify(payload),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then((res) => res.json)
        .then(() => { fetchData() })
        .catch((err) => console.log(err))
    }

    const HandleLogout = () => {
      localStorage.setItem("logIn_token","")
      navigate("/login")
    }


    return (
        <>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1>Todo List</h1>
        <Button variant="outlined" color='error' sx={{marginLeft:5}} onClick={HandleLogout}>Log Out</Button>
        </Box>
        <Box component={"form"} sx={{display:"flex", border:2, borderColor:"#90caf4", borderRadius:3, padding:3}}>
        <Search>
            <StyledInputBase placeholder="Add Todo…" id="addInput"/>
        </Search>
        <Checkbox id="checked" size="large" sx={{marginRight:2}}/>
        <AddButton variant="contained" size="small" color="primary" onClick={HandleAdd}> Add Todo</AddButton>
        </Box>
        </>
    )
}