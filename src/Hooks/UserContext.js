import {createContext, useState,useContext } from "react"

 const UserContext=createContext()

export  function ContextProvider({children}){
    const [user,setUser]=useState('')

    return <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
}
export function useUser(){
    const context= useContext(UserContext)
    return context
}