import { Get_Todo_Data } from "./action";

export const TodoReducer = (store ={todos: []},action) => {
    switch(action.type){
        case Get_Todo_Data:{
            return {
                todos : [...action.payload]
            }
        }
        default:{
            return store
        }
    }
}