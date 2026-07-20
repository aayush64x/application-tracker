import { createContext, type ReactNode, useState, useContext  } from "react";

interface AuthContextProp{
  token : string | null
  setToken : React.Dispatch<React.SetStateAction<string | null>> 
  login : (newToken : string, remeberMe : boolean) => void; 
  logOut : () => void; 
}

interface AuthContextProviderProp{
  children : ReactNode; 
}
const AuthContext = createContext<AuthContextProp | undefined>(undefined); 

export function AuthContextProvider({children} : AuthContextProviderProp){
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const login = (newToken : string, rememberMe : boolean) => {
    setToken(newToken);
    if(rememberMe){
      localStorage.setItem("token", newToken);
    }
  }

  const logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  }
  return(
    <AuthContext.Provider value={{token, setToken, login, logOut}}> 
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext);
  if(!context){
    throw new Error('useAuth must be used with an AuthContextProvider');
  }
  return context; 
}