import axios from "axios";

const REACT_APP_API_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getPosts() {
  return axios.get(`${REACT_APP_API_URL}/post`);
}

function createPost(token, body) {
  return axios.post(`${REACT_APP_API_URL}/post`, body, createConfig(token));
}

function deletePost(body, token) {
  const config = createConfig(token);
  config.data = body;
  return axios.delete(`${REACT_APP_API_URL}/post`, config);
}

function updatePost(body, token) {
  return axios.put(`${REACT_APP_API_URL}/post`, body, createConfig(token));
}

function getPostsByHashtag(hashtag) {
  return axios.get(`${REACT_APP_API_URL}/hashtag/${hashtag}`);
}

function getPostCount() {
  return axios.get(`${REACT_APP_API_URL}/post/count`);
}

const apiPosts = {
  getPosts,
  createPost,
  deletePost,
  updatePost,
  getPostsByHashtag,
  getPostCount,
};

export default apiPosts;

