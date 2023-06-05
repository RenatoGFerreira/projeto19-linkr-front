import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const lsAuth = JSON.parse(localStorage.getItem("auth"));
    const [auth, setAuth] = useState(lsAuth !== null ? lsAuth : {});
    const navigate = useNavigate()

    useEffect(() => {
        if(lsAuth === null){
        navigate("/")
        }
    }, [])

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}