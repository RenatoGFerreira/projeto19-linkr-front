import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import TrendingHashtags from "../../components/TimeLineComponent/TrendingTimeLine/Trending";
import Publication from "../../components/TimeLineComponent/PublicationsTimeLine/Publications";
import {
  Container,
  TimeContainer,
  Trending,
  Hashtag,
  ContainerHashtag,
  Separator,
  ConteudoHashtag,
} from "./Style";
import { AuthContext } from "../../contexts/AuthContext";
import apiHashtags from "../../services/apiHashtag";
import { Form, useParams } from "react-router-dom";

export default function HashtagPage() {
  const { auth } = useContext(AuthContext);
  const [topHashtags, setTopHashtags] = useState([]);
  const [posts, setPosts] = useState(undefined);
  const { hashtag } = useParams();

  const getPostsByHashtag = () => {
    apiHashtags
      .getPostsByHashtag(hashtag)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostsByHashtag();
  }, []);

  return (
    <ScreenContainer>
      <NavBar />
    
      <Container>
      <h2>{hashtag}</h2>
        <ConteudoHashtag>
        <TimeContainer>
          {posts ? (
            posts.map((post) => (
              <Publication
                key={post.id}
                id={post.id}
                user={post.user}
                name={post.name}
                image={post.image}
                url={post.url}
                likes={post.likes}
                description={post.description}
              />
            ))
          ) : (
            <></>
          )}
        </TimeContainer>
        <TrendingHashtags/>

        </ConteudoHashtag>
       
      </Container>
    </ScreenContainer>
  );
}
