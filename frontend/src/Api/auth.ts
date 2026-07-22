import axios from "axios";
import axiosInstance from "./axiosInstance";

const API_Base = "http://localhost:8080/api";

export async function loginUser(email: string, password: string){
  const response = await axios.post(`${API_Base}/auth/login`, {
    email,
    password
  });
  return response.data;
}

export async function registerUser(userName: string, firstName: string, lastName: string, email: string, password: string){
  const response = await axios.post(`${API_Base}/users`, {
    userName,
    firstName,
    lastName,
    email,
    password
  });
  return response.data;
}

export async function getUserById(id: string) {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
}