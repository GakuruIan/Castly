import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL:`"${import.meta.env.VITE_SERVER_URL}"`,
    baseURL:"http://localhost:4000",
    timeout:1500,
    withCredentials:true,
    headers: {
  'Accept': 'application/json'
}
})

