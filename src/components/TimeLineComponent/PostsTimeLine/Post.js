import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import apiPosts from "../../../services/apiPost";
import Publication from "../PublicationsTimeLine/Publications";
import { Container, PostContainer, Image, Form, Button } from "./Style";

export default function Post() {
  const { auth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ url: "", description: "" });
  const [showNewPostsButton, setShowNewPostsButton] = useState(false);
  const [newPostsCount, setNewPostsCount] = useState(0);

  useEffect(() => {
    getPostList();
  }, []);

  function getPostList() {
    apiPosts
      .getPosts()
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
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
        console.log(res.data);
        getPostList();
        setShowNewPostsButton(true);
        setNewPostsCount(newPostsCount + 1); // Incrementa a quantidade de novos posts
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  function handleShowNewPosts() {
    setShowNewPostsButton(false);
    setNewPostsCount(0); // Reinicia a quantidade de novos posts
    getPostList();
  }

  return (
    <Container>
      <PostContainer>
        <Image>
          <img src={auth.image} alt="user" />
        </Image>
        <Form>
          <h3>What are you going to share today?</h3>
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
              placeholder="Awesome article about #javascript"
              value={form.description}
              onChange={handleForm}
            ></textarea>

            <button type="submit">Publish</button>
          </form>
        </Form>
      </PostContainer>
      {showNewPostsButton && (
        <Button onClick={handleShowNewPosts}>
          {newPostsCount}  {newPostsCount === 1 ? "new post" : "new posts"}, load more!
        </Button>
      )}
      {posts.map((p) => (
        <Publication
          key={p.id}
          userId={p.userId}
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
  );
}
