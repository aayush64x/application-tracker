import axios from "axios";

const API_Base = "http://localhost:8080/api";

export async function loginUser(email: string, password: string){
  const response = await axios.post(`${API_Base}/auth/login`, {
    email,
    password
  });
  return response.data;
}