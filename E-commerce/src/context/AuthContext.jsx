import { createContext, useContext, useEffect, useState } from "react";
import { GoogleLogin, LogOut, onUserStateChanged,FacebookLogin,GithubLogin } from "../api/firebase";


const AuthContext = createContext();

export function AuthContextProvider({children}){

    const [user,setUser]=useState()

    useEffect(()=>{
        onUserStateChanged((user)=>{
            
         setUser(user)
        })
    },[])

    return(
    <AuthContext.Provider 
    value={{user,uid:user && user.uid,GoogleLogin,FacebookLogin,LogOut,GithubLogin}}>

        {children}
    </AuthContext.Provider>
    )
}

export function useAuthContext(){
    return useContext(AuthContext);
}