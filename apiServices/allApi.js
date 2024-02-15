import axios from "axios"
import { SERVER_URL } from "./serverUrl"

export const getAllStudentsApi=async()=>{
    return await axios.get(`${SERVER_URL}/all-students`)
}
export const registerApi=async(reqBody)=>{
    return await axios.post(`${SERVER_URL}/register`,reqBody)
}