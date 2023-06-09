import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import apiPosts from "../../../services/apiPost";
import Publication from "../PublicationsTimeLine/Publications";
import { Container, PostContainer, Image, Form } from "./Style";
import { Button } from "../PublicationsTimeLine/Style";

export default function Post({ id }) {
  const { auth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ url: "", description: "" });
  const [postCount, setPostCount] = useState(0); // New state to track the count of new posts

  const user = auth.id;

  useEffect(() => {
    getPostList();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getPostList();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function getPostList() {
    apiPosts
      .getPosts()
      .then((res) => {
        const fetchedPosts = res.data;
        const latestPosts = fetchedPosts.slice(posts.length); // Get the latest posts
  
        setPosts((prevPosts) => [...prevPosts, ...latestPosts]); // Update the posts state correctly
        setPostCount((prevCount) => prevCount + latestPosts.length); // Update the count of new posts
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message);
      });
  }
  

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCreate(e) {
    e.preventDefault();

    const body = { ...form };
    apiPosts
      .createPost(auth.token, body)
      .then((res) => {
        setForm({ url: "", description: "" });
        getPostList();
        setPostCount((prevCount) => prevCount + 1); // Increment the count of new posts
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  function resetNewPostsExist() {
    setPostCount(0); // Reset the count of new posts
  }

  function showNewPostsAlert() {
    if (postCount > 0) {
      return (
        <Button onClick={resetNewPostsExist}>
          Novos posts foram criados! ({postCount}{" "}
          {postCount !== 1 ? "novos posts" : "novo post"})
        </Button>
      );
    } else {
      return null;
    }
  }

  return (
    <Container>
      <PostContainer>
        <Image>
          <img src={auth.image} alt="user" />
        </Image>
        <Form>
          <h3>O que você vai compartilhar hoje?</h3>
          <form onSubmit={handleCreate}>
            <input
              name="url"
              type="url"
              placeholder="http://..."
              required
              value={form.url}
              onChange={handleForm}
            />
            <textarea
              name="description"
              placeholder="Artigo incrível sobre #javascript"
              value={form.description}
              onChange={handleForm}
            ></textarea>
            <button type="submit">Publicar</button>
          </form>
        </Form>
      </PostContainer>
      {showNewPostsAlert()}

      {posts.map((p) => (
        <Publication
          key={p.id}      userId={p.userId}
          id={p.id}
          name={p.name}
          image={p.image}
          url={p.url}
          likes={p.likes}
          description={p.description}
          getPostList={getPostList}
        />
      ))}
    </Container>
  )}    
