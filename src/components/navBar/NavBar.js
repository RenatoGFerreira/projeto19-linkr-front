import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Container, IconDown, IconUp, Style, ModalContainer } from "./Style";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export default function NavBar() {
  const {auth} = useContext(AuthContext);
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  function showModal(){
    setModal(!modal)
  }

  function LogOut(){    
    Swal.fire({
      title: 'Tem certeza que deseja deslogar?',
      text: "Fica vai?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1877F2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Quero deslogar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Depois cê volta viu!!',
          ':(',
          'success',
          navigate("/")
        )
      }
    })
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