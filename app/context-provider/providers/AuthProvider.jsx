"use client"

import { useEffect, useState } from "react";
import { AuthContext } from "../contexts";

const AuthProvider = ({session,children}) => {
const [user,setUser]=useState() 
useEffect(()=>{
   if (session?.user) {
      setUser(session?.user)
   }
},[session?.user])  
   return (
      <AuthContext.Provider value={{user,setUser}}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;