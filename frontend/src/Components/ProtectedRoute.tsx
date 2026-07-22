import type{ ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { Navigate  } from "react-router-dom";

interface ProtectedRouteProp{
  children : ReactNode
}
export default function ProtectedRoute({children} : ProtectedRouteProp){
const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" />
  }
  return children;
}