import axios from "axios";

const REACT_APP_API_URL = "https://linkrapi-bbrm.onrender.com";

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
  return axios.get(`${process.env.REACT_APP_API_URL}/post/count`)
    .then((response) => {
      return response.data.postCount;
    })
    .catch((error) => {
      throw new Error("An error occurred while fetching the post count.");
    });
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







