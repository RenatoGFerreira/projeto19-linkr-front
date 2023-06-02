import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import { Container, TimeContainer} from "./Style";
import Publication from "../../components/TimeLineComponent/PublicationsTimeLine/Publications";
import TrendingTimeLine from "../../components/TimeLineComponent/TrendingTimeLine/Trending";


export default function HashtagPage() {
    return (
        <ScreenContainer>
            <NavBar />
            <Container>
                <h2> # hashtag</h2>
                <TimeContainer>
                    <Publication></Publication>
                    <TrendingTimeLine/>
                </TimeContainer>
            </Container>
        </ScreenContainer>
    );
}


//Rascunho Lógica

/*

import React, { useState } from 'react';

function PostForm() {
  const [posts, setPosts] = useState([]);
  const [description, setDescription] = useState('');

  const handleInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hashtags = extractHashtags(description);
    const newPost = { description, hashtags };
    setPosts([...posts, newPost]);
    setDescription('');
  };

  const extractHashtags = (description) => {
    const regex = /#\w+/g;
    return description.match(regex) || [];
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={handleInputChange}
          placeholder="Write a post..."
        />
        <button type="submit">Post</button>
      </form>

      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.description}</p>
          <ul>
            {post.hashtags.map((tag, index) => (
              <li key={index}>
                <a href={`https://example.com/hashtags/${tag}`}>{tag}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PostForm;



*/



