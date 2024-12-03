import { useState, useContext, createContext } from "react"

export const UserContext = createContext()
const url = "http://localhost:3000/"


export function UserContextProvider({children}){
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState({})

    async function userHandleLogin(username, password){
        try {
            const res = await fetch(url + "user/login", {
                method: "POST",
                body: JSON.stringify({username, password}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.status !== 200) throw new Error(res.error.message || "Something went wrong" )
            const result = await res.json()
            setUserIsLoggedIn(true)
            console.log(result)
            return true
        
        
        
        
        } catch(error){
            console.log("FEHLER",error)
            // Error handling routine here return false wen error in login gehandelt wird, oder starte globales error handling
        }
    }

    return (
        <UserContext.Provider 
            value={{
                userIsLoggedIn, userData, userHandleLogin
        }}>
        
            {children}
        
        </UserContext.Provider>
    )
}


export function useUser(){
    return useContext(UserContext)
}