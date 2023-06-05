import { PublicationContainer, Image, Content, IconHeart, IconHeartfill, TextLike, LikeContainer,TextLikeHover } from "./Style";
  import urlMetadata from "url-metadata";
  import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Publication({ user, name, image, url, likes, description }) {
  const [liked, setLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(0);
  const [linkMetadata, setLinkMetadata] = useState(null);

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
        <img src={image} alt="description"/>
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
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={url} target="_blank">
          <h3>{user}</h3>
          <p>{description}</p>
          <p>{url}</p>
        </Link>
      </Content>
    </PublicationContainer>
  );
}
