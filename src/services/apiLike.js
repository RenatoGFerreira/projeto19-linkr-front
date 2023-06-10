import axios from "axios"

const REACT_APP_API_URL = "https://linkrapi-bbrm.onrender.com"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function insertLike(token, body) {
    const promise = axios.post(`${REACT_APP_API_URL}/post`, body, createConfig(token))
    return promise
}

function deleteLike(token, body) {
    const promise = axios.delete(`${REACT_APP_API_URL}/post`, body, createConfig(token))
    return promise
}

function getTotalLikes(body) {
    const promise = axios.get(`${REACT_APP_API_URL}/post`, body)
    return promise
}

const apiLikes = { insertLike, deleteLike, getTotalLikes };
export default apiLikes;