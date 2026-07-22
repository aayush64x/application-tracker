import {
  createContext,
  type ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../Api/auth";

interface AuthContextProp {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  login: (newToken: string, rememberMe: boolean) => Promise<void>;
  logOut: () => void;
  user: UserProp | null;
}

interface UserProp {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthContextProviderProp {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProp | undefined>(undefined);

export function AuthContextProvider({ children }: AuthContextProviderProp) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") ?? sessionStorage.getItem("token"),
  );
  const [user, setUser] = useState<UserProp | null>(null);

  const fetchAndSetUser = async (currentToken: string) => {
    const decoded = jwtDecode(currentToken);
    if (!decoded.sub) {
      throw new Error("Token missing subject claim");
    }
    const fetchedUser = await getUserById(decoded.sub);
    setUser(fetchedUser);
  };

  const login = async (newToken: string, rememberMe: boolean) => {
    setToken(newToken);
    if (rememberMe) {
      localStorage.setItem("token", newToken);
    } else {
      sessionStorage.setItem("token", newToken);
    }
    await fetchAndSetUser(newToken);
  };

  useEffect(() => {
    if (token) {
      fetchAndSetUser(token);
    }
  }, []);

  const logOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, setToken, login, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used with an AuthContextProvider");
  }
  return context;
}