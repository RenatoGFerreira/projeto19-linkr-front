import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import apiPosts from "../../../services/apiPost";
import Publication from "../PublicationsTimeLine/Publications";
import { Container, PostContainer, Image, Form} from "./Style";

export default function Post() {
  const { auth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({url: "", description: ""});

  console.log(auth.token)

  useEffect(getPostList,[])

  function getPostList(){
    apiPosts.getPosts()
    .then(res => {
      setPosts(res.data)
    })
    .catch(err =>{
      console.log(err.response.data)
      alert(err.response.data.message)
    })
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCreate(e){
    e.preventDefault()

    const body ={...form}
    apiPosts.createPost(auth.token, body)
    .then(res =>{
      setForm({url: "", description: ""})
      console.log(res.data)
      getPostList()
    })
    .catch(err => {
      alert(err.response.data.message)
    })
  }

  return (
    <Container>
      <PostContainer>
        <Image>
          <img src={auth.image} />
        </Image>
        <Form>
            <h3>What are you going to share today?</h3>
            <form onSubmit={handleCreate}>
                <input 
                  name="url"
                  type="url" 
                  placeholder="http://..."
                  required
                  // disabled={isLoading}
                  value={form.url}
                  onChange={handleForm}
                />
                <textarea 
                  name="description"
                  placeholder="Awesome article about #javascript"
                  // disabled={isLoading}
                  value={form.description}
                  onChange={handleForm}
                ></textarea>

                <button type="submit" disabled={false}>Publish</button>
            </form>
        </Form>
      </PostContainer>
      {
        posts.map(p => (
          <Publication
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            url={p.url}
            likes={p.likes}
            description={p.description}
          />
        ))
      }
    </Container>
  );
}
