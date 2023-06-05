import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import TrendingHashtags from "../../components/TimeLineComponent/TrendingTimeLine/Trending";
import Publication from "../../components/TimeLineComponent/PublicationsTimeLine/Publications";
import { Container, TimeContainer, Trending, Hashtag, ContainerHashtag, Separator, ConteudoHashtagTrending } from "./Style";
import { AuthContext } from "../../contexts/AuthContext";
import apiHashtags from "../../services/apiHashtag"

export default function HashtagPage() {
  const { auth } = useContext(AuthContext);
  const [topHashtags, setTopHashtags] = useState([]);

  const fetchTopHashtags = () => {
    apiHashtags.getTopHashtags()
      .then((response) => {
        setTopHashtags(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Lida com erros de forma adequada
      });
  };

  useEffect(() => {
    fetchTopHashtags();
  }, []);

  return (
    <ScreenContainer>
      <NavBar />
      <Container>
        <h2># hashtag</h2>
        <TimeContainer>
          <Publication></Publication>
          <Trending>
            <h2>trending</h2>
            <Separator></Separator>
            <ContainerHashtag>
              {topHashtags.map((hashtag, index) => (
                <HashtagTrendings key={index} text={hashtag} />
              ))}
            </ContainerHashtag>
          </Trending>
        </TimeContainer>
      </Container>
      <TrendingHashtags />
    </ScreenContainer>
  );
}

function HashtagTrendings(props) {
  const { text } = props;
  return (
    <ConteudoHashtagTrending>
      <Hashtag>{text}</Hashtag>
    </ConteudoHashtagTrending>
  );
}
