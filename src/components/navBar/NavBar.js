import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Container, IconDown, IconUp, Style, ModalContainer } from "./Style";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import SearchBar from "../searchBar/SearchBar";
import apiAuth from "../../services/apiAuth";

export default function NavBar() {

  const { auth, setAuth } = useContext(AuthContext);
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()
  const [token, setToken] = useState(auth.token)

  console.log(auth.token)

  function showModal() {
    setModal(!modal)
  }

  function LogOut() {
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
        apiAuth.signOut(token)
          .then(
            Swal.fire(
              'Depois cê volta viu!!',
              ':(',
              'success'
            ),
            localStorage.removeItem("auth"),
            setAuth({}),
            navigate("/")
          )
          .catch(err => {
            alert(err.response.data)
          })
      }
    })
  }
  return (
    <Container>
      <h2>linkr</h2>
      <SearchBar />
      <Style data-test="menu" onClick={showModal}>
        {modal ? <IconDown /> : <IconUp />}
        <img data-test="avatar" src={auth.image} alt="description" />
        <ModalContainer data-test="logout" modal={modal} onClick={LogOut}>
          <h1>Logout</h1>
        </ModalContainer>
      </Style>
    </Container>
  );
}