import { PublicationContainer, Image, Content, IconHeart, IconHeartfill, TextLike, LikeContainer,TextLikeHover } from "./Style";
  import urlMetadata from "url-metadata";
import { Link } from "react-router-dom";
  import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function Publication({ user, name, image, url, likes, description }) {
  const { Auth } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(likes);
  const [linkMetadata, setLinkMetadata] = useState(null);
  const [form, setForm] = useState({
    likebyuser: "",
    postid: "",
  });

  console.log(`Auth é o ${Auth}`)

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
          {likes === 1?(
            <TextLike>{likes} like</TextLike>
          ):(
            <TextLike>{likes} likes</TextLike>
          )}
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
