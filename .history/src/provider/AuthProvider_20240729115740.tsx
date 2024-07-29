import { createContext, PropsWithChildren, useEffect } from "react";

type AuthData={};
const AuthContext= createContext<AuthData>({});

export default function AuthProvider({children}: PropsWithChildren) {

useEffect(()=>{
    console.log("AuthProvider mounted");
}, []);

  return <AuthContext.Provider value={{}}>{children}
  </AuthContext.Provider>;
}