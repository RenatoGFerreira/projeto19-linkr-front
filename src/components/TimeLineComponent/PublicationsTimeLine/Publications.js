import { useState } from "react";
import { PublicationContainer, Image, Content, IconHeart, IconHeartfill, TextLike } from "./Style";
import urlMetadata from "url-metadata";
import { useEffect, useState } from "react";

export default function Publication({ name, image, url, likes, description }) {
    const [linkMetadata, setLinkMetadata] = useState(null);
  
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

export default function Publication({ user, description, url }) {
  const [liked, setLiked] = useState(false)
  function changeLike(){
    setLiked(!liked)
  }
  
  return (
    <PublicationContainer>
      <Image>
        <img src={image} alt="description"/>
        <IconHeart/>
        <IconHeartfill/>
        <TextLike>13 likes</TextLike>
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
