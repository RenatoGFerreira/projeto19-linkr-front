import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Container, IconDown, IconUp, Style, ModalContainer } from "./Style";

export default function NavBar() {
  const {auth} = useContext(AuthContext);
  const [modal, setModal] = useState(false)

  function showModal(){
    setModal(!modal)
  }

  function LogOut(){
    alert("Aqui vai deslogar o usuario") 
  }

  return (
    <Container>
      <h2>linkr</h2>
      {/* codigo da pesquisa aqui */}
      <Style onClick={showModal}>
        {modal? <IconDown/> : <IconUp/>}
        <img src={auth.image} />
        <ModalContainer modal={modal} onClick={LogOut}>
            <h1>Logout</h1>
        </ModalContainer>
      </Style>
    </Container>
  );
}