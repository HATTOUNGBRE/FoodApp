import { createContext, PropsWithChildren, useEffect } from "react";
import { supabase } from "../lib/supabase";

type AuthData={};
const AuthContext= createContext<AuthData>({});

export default function AuthProvider({children}: PropsWithChildren) {

useEffect(()=>{
    const fetchSession= async()=>{
        await supabase.auth.getSession();
    };
    console.log("AuthProvider mounted");
}, []);

  return <AuthContext.Provider value={{}}>{children}
  </AuthContext.Provider>;
}