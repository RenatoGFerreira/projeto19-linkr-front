import React, { useEffect, useState } from "react";
import apiHashtags from "../../../services/apiHashtag";
import { ContainerHashtag, Separator, ConteudoHashtagTrending, Hashtag, Trending } from "./Style";
import { Link } from "react-router-dom";

function TrendingHashtags() {
  const [topHashtags, setTopHashtags] = useState([]);

  useEffect(() => {
    fetchTopHashtags(); 
    const interval = setInterval(fetchTopHashtags, 1000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);

  const fetchTopHashtags = () => {
    apiHashtags
      .getTopHashtags()
      .then((response) => {
        setTopHashtags(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleHashtagClick = (hashtag) => {
    const path = `/hashtag/${hashtag}`;
    window.location.replace(path.replace("#", ""));
  };

  return (
    <Trending>
      <h2>trending</h2>
      <Separator />
      <ContainerHashtag>
        {topHashtags.map((hashtag, index) => (
          <HashtagTrendings key={index} text={hashtag} onClick={() => handleHashtagClick(hashtag)} />
        ))}
      </ContainerHashtag>
    </Trending>
  );
}

function HashtagTrendings(props) {
  const { text, onClick } = props;
  return (
    <ConteudoHashtagTrending>
      <Hashtag onClick={onClick}>{text}</Hashtag>
    </ConteudoHashtagTrending>
  );
}

export default TrendingHashtags;
