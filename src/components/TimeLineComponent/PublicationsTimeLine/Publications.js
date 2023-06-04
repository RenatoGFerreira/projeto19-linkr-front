import { useState } from "react";
import {
  PublicationContainer,
  Image,
  Content,
  IconHeart,
  IconHeartfill,
  TextLike,
  LikeContainer,
  TextLikeHover
} from "./Style";

export default function Publication({ user, description, url }) {
  const [liked, setLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(0);

  function changeLike() {
    if (liked) {
      setLiked(!liked);
      setLikesAmount(likesAmount - 1);
    } else {
      setLiked(!liked);
      setLikesAmount(likesAmount + 1);
    }
  }
  return (
    <PublicationContainer>
      <Image>
        {/* colocar os likes aqui */}
        <img src="#" alt="description" />
        <LikeContainer>
          {liked ? (
            <IconHeartfill onClick={changeLike} />
          ) : (
            <IconHeart onClick={changeLike} />
          )}
          <TextLike>{likesAmount} likes</TextLike>
          <TextLikeHover>Fulano, cicrano e outras 20 pessoas</TextLikeHover>
        </LikeContainer>
      </Image>
      <Content>
        <h3>{user}</h3>
        <p>{description}</p>
        <div>
          <p>{url}</p>
        </div>
      </Content>
    </PublicationContainer>
  );
}
