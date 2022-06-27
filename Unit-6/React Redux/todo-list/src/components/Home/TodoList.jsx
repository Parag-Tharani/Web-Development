import { Box,Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTodoData } from "../../Redux/Todo/action";

export const TodoList = () => {

    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch()

    React.useEffect(() => {
        const fetchData = () => {
            fetch(`http://localhost:8080/todos`)
            .then((res) => res.json())
            .then((res) => dispatch(getTodoData(res)))
            .catch((err) => console.log(err))
        }
        fetchData()
    },[dispatch])

    return (
        <>
            { todos.map((items) => {
                return (
                    <Box key={items.id} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        {items.status?<h4 style={{color:"green"}}>{ items.title }</h4>:<h4 style={{color:"red"}}>{ items.title }</h4>}
                        <Link to="#" style={{textDecoration:"none", marginLeft:"20px"}}><Button variant="outlined">Edit</Button></Link>
                    </Box>
                )
            })}
        </>
    )
}