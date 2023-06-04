import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }
  
function getPubli(id, token) {
    const config = createConfig(token);

    const promise = axios.get(`${BASE_URL}/publis`, config);
  
    return promise;
}

function deletePubli(id, token) {
    const config = createConfig(token);
  
    const promise = axios.delete(`${BASE_URL}/publi/${id}`, config);
  
    return promise;
}
function updatePubli(id, body, token) {
    const config = createConfig(token);
  
    const promise = axios.delete(`${BASE_URL}/publi/${id}`, body, config);
  
    return promise;
}

const api = {
    getPubli,
    deletePubli,
    updatePubli
  }
  
  export default api;