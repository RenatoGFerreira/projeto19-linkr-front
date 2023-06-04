import { PublicationContainer, Image, Content, IconHeart, IconHeartfill, TextLike, LikeContainer,TextLikeHover } from "./Style";
  import urlMetadata from "url-metadata";
  import { useEffect, useState } from "react";


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

  useEffect(() => {
    fetchLinkMetadata();
  }, [url]);

  async function fetchLinkMetadata() {
    try {
      const metadata = await urlMetadata(url);
      console.log(metadata)
      setLinkMetadata(metadata);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os metadados do link:", error);
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
        <div>
          <p>Image: </p>
          <h3>{user}</h3>
          <p>{description}</p>
          <p>{url}</p>
        </div>
      </Content>
    </PublicationContainer>
  );
}
