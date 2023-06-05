import axios from "axios"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getPosts(){
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/post`)
    return promise
}

function createPost(token, body){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/post`, body, createConfig(token))
    return promise
}

const apiPosts = {getPosts, createPost};
export default apiPosts;