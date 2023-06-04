import { useState } from "react";
import { PublicationContainer, Image, Content, IconHeart, IconHeartfill, TextLike } from "./Style";

export default function Publication() {
  const [liked, setLiked] = useState(false)

  function changeLike(){
    setLiked(!liked)
  }
  
  return (
    <PublicationContainer>
      <Image>
        <img src="#" alt="description"/>
        {liked?( <IconHeartfill onClick={changeLike}/>) : (<IconHeart onClick={changeLike}/>)}
        <TextLike>13 likes</TextLike>
        
      </Image>
      <Content>
        <h3>Name da pessoas</h3>
        <p>descrição</p>
        <div>
            <p>url</p>
        </div>
      </Content>
    </PublicationContainer>
  );
}
