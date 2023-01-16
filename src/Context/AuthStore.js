import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";


export let AuthContext=createContext(null);
export default function AuthContextProvider(props){

    let [userData, setUserData] = useState(null)

    let saveUserData=()=>{
      let encoded=localStorage.getItem('userToken');
      let decoded=jwtDecode(encoded)
      // console.log(decoded);
      setUserData(decoded)
    }
    //to avoid refresh logout
    useEffect(() => {
      if(localStorage.getItem('userToken')!==null){
        saveUserData();
      }
    }, [])
    
    return <AuthContext.Provider value={{userData,setUserData,saveUserData}}>
    
    {props.children}
    </AuthContext.Provider>
}