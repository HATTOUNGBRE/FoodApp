import { createContext, PropsWithChildren, useEffect } from "react";
import { supabase } from "../lib/supabase";

type AuthData={};
const AuthContext= createContext<AuthData>({});

export default function AuthProvider({children}: PropsWithChildren) {

useEffect(()=>{
    const fetchSession= async()=>{
       const {data, error}= await supabase.auth.getSession();
       console.log("data", data);
    };

    fetchSession();
}, []);

  return <AuthContext.Provider value={{}}>{children}
  </AuthContext.Provider>;
}