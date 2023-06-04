import { PublicationContainer, Image, Content, IconHeart, IconHeartfill, TextLike } from "./Style";

export default function Publication({ user, description, url }) {
  return (
    <PublicationContainer>
      <Image>
        {/* colocar os likes aqui */}
        <img src="#" alt="description"/>
        <IconHeart/>
        <IconHeartfill/>
        <TextLike>13 likes</TextLike>
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
