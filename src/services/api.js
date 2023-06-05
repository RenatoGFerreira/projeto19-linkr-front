import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }
  
function getPost(id, token) {
    const config = createConfig(token);

    const promise = axios.get(`${BASE_URL}/post`, config);
  
    return promise;
}

function deletePost(token, body) {
    const config = createConfig(token);
    const promise = axios.delete(`${BASE_URL}/post`, config);
    return promise;
}

function updatePost(body, token) {
    const config = createConfig(token);
    const promise = axios.put(`${BASE_URL}/post`, body, config);
    return promise;
}

const api = {
    getPost,
    deletePost,
    updatePost
  }
  
  export default api;