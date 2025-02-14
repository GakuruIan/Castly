import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:import.meta.env.BASE_URL,
    timeout:1500,
    withCredentials:true
})

