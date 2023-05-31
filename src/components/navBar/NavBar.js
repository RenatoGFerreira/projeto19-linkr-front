import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Container, Icon, Style } from "./Style";

export default function NavBar() {
  const {auth} = useContext(AuthContext);

  return (
    <Container>
      <h2>linkr</h2>
      {/* codigo da pesquisa aqui */}
      <Style>
        <Icon />
        <img src={auth.image} />
      </Style>
    </Container>
  );
}