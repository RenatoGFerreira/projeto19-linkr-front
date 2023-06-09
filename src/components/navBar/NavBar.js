import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Container, IconDown, IconUp, Style, ModalContainer } from "./Style";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SearchBar from "../searchBar/SearchBar";

export default function NavBar() {
  const { auth, setAuth } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  function showModal() {
    setModal(!modal);
  }

  function LogOut() {
    Swal.fire({
      title: "Tem certeza que deseja deslogar?",
      text: "Fica vai?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1877F2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Quero deslogar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Depois cê volta viu!!", ":(", "success").then(() => {
          localStorage.removeItem("auth");
          setAuth({});
          navigate("/");
        });
      }
    });
  }

  function handleLinkrClick() {
    navigate("/timeline");
  }

  return (
    <Container>
      <h2 onClick={handleLinkrClick}>linkr</h2>
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
