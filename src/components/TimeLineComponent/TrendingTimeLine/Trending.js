import React, { useEffect, useState } from "react";
import apiHashtags from "../../../services/apiHashtag";
import { ContainerHashtag, Separator, ConteudoHashtagTrending, Hashtag, Trending } from "./Style";

function TrendingHashtags() {
  const [topHashtags, setTopHashtags] = useState([]);

  useEffect(() => {
    fetchTopHashtags();
  }, []);

  const fetchTopHashtags = () => {
    apiHashtags
      .getTopHashtags()
      .then((response) => {
        setTopHashtags(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Lida com erros de forma adequada
      });
  };

  return (

      <Trending>
      <h2>trending</h2>
      <Separator />
      <ContainerHashtag>
        {topHashtags.map((hashtag, index) => (
          <HashtagTrendings key={index} text={hashtag} />
        ))}
      </ContainerHashtag>
    </Trending>
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

export default TrendingHashtags;
