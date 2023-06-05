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
  const promise = axios.get(`${REACT_APP_API_URL}/post`);
  return promise;
}

function createPost(token, body) {
  const promise = axios.post(
    `${REACT_APP_API_URL}/post`,
    body,
    createConfig(token)
  );
  return promise;
}

function getPostsByHashtag(hashtag) {
  const promise = axios.get(`${REACT_APP_API_URL}/hashtag/${hashtag}`);
  return promise;
}

function deletePost(token, id, user) {
  const config = createConfig(token);
  config.data = { id, user };

  const promise = axios.delete(`${REACT_APP_API_URL}/post`, config);
  return promise;
}

function updatePost(token, id, user, description) {
  const config = createConfig(token);
  config.data = { id, user, description };

  const promise = axios.put(`${REACT_APP_API_URL}/post`, config);
  return promise;
}

function getTopHashtags() {
  const promise = axios.get(`${REACT_APP_API_URL}/hashtag`);
  return promise;
}

const apiHashtags = {
  getPosts,
  createPost,
  getPostsByHashtag,
  deletePost,
  updatePost,
  getTopHashtags,
};

export default apiHashtags;