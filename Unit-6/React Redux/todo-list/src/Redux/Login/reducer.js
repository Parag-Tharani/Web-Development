import { Is_login } from "./action";

export const LogReducer = (store = { logedIn:false}, action) => {
    switch(action.type){
        case Is_login:{
            return{
                logedIn : action.payload
            }
        }
        default:{
            return store
        }
    }
}