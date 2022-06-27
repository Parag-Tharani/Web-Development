import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../../Redux/Login/action";

export const Todo = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    React.useEffect(() => {
        if(localStorage.getItem("logIn_token") && localStorage.getItem("logIn_token") !== null){
            dispatch(isLogin(true))
        }else{
            dispatch(isLogin(false))
            navigate("/login")
        }
    },[navigate,dispatch])


    return (
        <div>
            <TodoInput />
            <TodoList />
        </div>
    )
}