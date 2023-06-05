import React from "react";
import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import Post from "../../components/TimeLineComponent/PostsTimeLine/Post";
import { Container, TimeContainer } from "./Style";
import TrendingHashtags from "../../components/TimeLineComponent/TrendingTimeLine/Trending";


export default function TimeLinePage() {
  return (
    <ScreenContainer>
      <NavBar />
      <Container>
        <h2>timeline</h2>
        <TimeContainer>
          <Post />
          <TrendingHashtags />
        </TimeContainer>
      </Container>
    </ScreenContainer>
  );
}
