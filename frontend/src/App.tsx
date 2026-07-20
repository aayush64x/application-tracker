import { AuthContextProvider } from "./Components/AuthContext"
import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./Components/Register";

function App() {

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter>

      </AuthContextProvider>
      
    </>
  )
}

export default App
