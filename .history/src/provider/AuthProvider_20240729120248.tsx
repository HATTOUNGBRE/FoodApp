import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";

type AuthData={};
const AuthContext= createContext<AuthData>({});

export default function AuthProvider({children}: PropsWithChildren) {
const [session, setSession]= useState<Session | null>(null);
useEffect(()=>{
    const fetchSession= async()=>{
       const {data, error}= await supabase.auth.getSession();
       setSession(data.session);
       console.log("data", data);
    };

    fetchSession();
}, []);

  return <AuthContext.Provider value={{}}>{children}
  </AuthContext.Provider>;
}