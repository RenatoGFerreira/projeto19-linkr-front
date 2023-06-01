import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Publication from "../PublicationsTimeLine/Publications";
import { Container, PostContainer, Image, Form} from "./Style";

export default function Post() {
  const { auth } = useContext(AuthContext);
  return (
    <Container>
      <PostContainer>
        <Image>
          <img src={auth.image} />
        </Image>
        <Form>
            <h3>What are you going to share today?</h3>
            <form>
                <input type="text" placeholder="http://..."/>
                <input type="text" placeholder="Awesome article about #javascript"/>
                <button>Publish</button>
            </form>
        </Form>
      </PostContainer>
      <Publication/>
    </Container>
  );
}
