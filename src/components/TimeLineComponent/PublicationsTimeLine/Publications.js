import { PublicationContainer, Image, Content } from "./Style";

export default function Publication({ user, description, url }) {
  return (
    <PublicationContainer>
      <Image>
        <img src={user} alt="Post user image" />
        {/* colocar os likes aqui */}
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
