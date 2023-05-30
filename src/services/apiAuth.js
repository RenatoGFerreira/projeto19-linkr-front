import axios from "axios"

const BASE_URL = "https://localhost:5000"

function signup(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    return promise
}

function signin(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body)
    return promise
}


const apiAuth = { signup, signin } 
export default apiAuth