import axios from "axios"

const REACT_APP_API_URL = "http://localhost:5000"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getPosts(){
    const promise = axios.get(`${REACT_APP_API_URL}/post`)
    return promise
}

function createPost(token, body){
    const promise = axios.post(`${REACT_APP_API_URL}/post`, body, createConfig(token))
    return promise
}

const apiPosts = {getPosts, createPost};
export default apiPosts;