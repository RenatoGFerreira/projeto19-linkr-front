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

function deletePost(body, token) {
    const config = createConfig(token);
    //const config = 2;
    const promise = axios.delete(`${BASE_URL}/post`, body, config);
    return promise;
}

function updatePost(body, token) {
    const config = createConfig('1ec9e110-aa30-401e-a946-fcdae827bf60');
    //const config = 2;
    const promise = axios.put(`${BASE_URL}/post`, body, config);
    return promise;
}

const api = {
    getPost,
    deletePost,
    updatePost
  }
  
  export default api;