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

function deletePost(body, token) {
    const config = createConfig(token);
    config.data = body;
    const promise = axios.delete(`${REACT_APP_API_URL}/post`, config);
    return promise;
}

function updatePost(body, token) {
    const promise = axios.put(`${REACT_APP_API_URL}/post`, body, createConfig(token));
    return promise;
}

function getComment(body) {
    console.log("body do getcomment", body)
    const promise = axios.post(`${REACT_APP_API_URL}/postsId`, body);
    return promise;
}

function postComment(body, token) {
    console.log(body)
    const config = createConfig(token);
    const promise = axios.post(`${REACT_APP_API_URL}/postId`, body, config);
    return promise;
}

const apiPosts = {getPosts, createPost, deletePost, updatePost, getComment, postComment};
export default apiPosts;