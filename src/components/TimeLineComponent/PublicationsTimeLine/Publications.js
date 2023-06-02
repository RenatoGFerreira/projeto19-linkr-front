import { PublicationContainer, Image, Content } from "./Style";

export default function Publication() {
  return (
    <PublicationContainer>
      <Image>
        <img src="#" />
        {/* colocar os likes aqui */}
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
