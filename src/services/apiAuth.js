import axios from "axios"

const BASE_URL = "https://linkrapi-bbrm.onrender.com"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function signup(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    console.log(promise.response)
    return promise
}

function signin(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body)
    return promise
}

function signOut(body) {
    const promise = axios.post(`${BASE_URL}/sign-out`, createConfig(body))
    return promise
}


const apiAuth = { signup, signin, signOut }
export default apiAuth