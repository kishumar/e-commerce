
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { AuthDataContext } from './AuthContext'


export const UserDataContext = createContext()

function UserContext({children}) {

let [userData , setUserData]= useState("")
let {serverUrl} = useContext(AuthDataContext)


 const getCurrentUser = async()=>{
    try {
       let result = await axios.get(serverUrl + "/api/user/getcurrentuser", {
  withCredentials:true
});
setUserData(result.data)
console.log(result.data)

    } catch (error) {
        console.log(error)
        setUserData(null)
    }
}

useEffect(()=>{
    getCurrentUser()
},[])

let value ={
userData, setUserData,getCurrentUser
}



  return (
    <div>
      <UserDataContext.Provider value={value}>
            {children}
            </UserDataContext.Provider>
    </div>
  )
}

export default UserContext