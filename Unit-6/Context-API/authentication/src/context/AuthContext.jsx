import React from "react";

const AuthContext  = React.createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setToken] = React.useState("")

    const handleAuth = () => {
        setIsAuth(true)
    }

    const handleToken = (val) =>{
        setToken(val)
    }

    const handleLogout = () => {
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{isAuth, handleAuth, token, handleToken, handleLogout}}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }