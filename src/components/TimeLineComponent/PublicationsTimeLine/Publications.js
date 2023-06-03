import { PublicationContainer, Image, Content, IconHeart, IconHeartfill, TextLike } from "./Style";

export default function Publication() {
  return (
    <PublicationContainer>
      <Image>
        <img src="#" alt="description"/>
        <IconHeart/>
        <IconHeartfill/>
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
