

import { useState, useEffect, useReducer } from "react"
import { createContext } from "react"
import { Reducer } from "./reducer"
import data from "../user.json"

export const UserContext = createContext();

export const UserContextProvider =({ children })=>{
     const [userData, setuserData] = useState(data.users)
     const [ state, Dispatch ] = useReducer(Reducer, {
        singleUserData: {},
        userData
     });

     return (
        <UserContext.Provider value={{state}}>
            {children}
        </UserContext.Provider>
     )
}