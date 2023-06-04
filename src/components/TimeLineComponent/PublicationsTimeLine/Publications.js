import { PublicationContainer, Image, Content, TrashButton, TrashButton2, Modal, BackButton, DelButton, InputStyle } from "./Style";
import { useEffect, useState, useRef } from "react";
//import ReactModal from "react-modal";
import { IoMdTrash } from "react-icons/io";
import { TiPencil } from "react-icons/ti";
import { ThreeDots } from "react-loader-spinner";
//import axios from "axios";
import api from "../../../services/api";



export default function Publication() {
  //const BASE_URL = "http://localhost:5000";
  //const { auth } = useAuth();

  const [modalOpened, setModalOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [publis, setPublis] = useState([
    {id: "1", userId:"123", name: "João", image: "www.foto.com.png", likes:"2", description:"Link legal", url:"www.link.com"},
    {id: "2", userId:"123", name: "Maria", image: "www.foto.com.png", likes:"3", description:"Link legal 2", url:"www.link2.com"}]);
  
  const open = () => { setModalOpened(true) };
  const close = () => { setModalOpened(false) };
 
  const edit = () => { 
    setIsEditing(!isEditing);
    //verificar o requisito focus
    /* if(isEditing === true){
      textRef.current.focus()
    } */
    
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsDisabled(true);
      const body = {description: event.target.value}
      console.log(body)
      const promise = api.updatePubli(body);
      promise.then(() => {
        setIsDisabled(false);
        getPublis();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert("Não foi possível salvar as alterações!");
        setIsDisabled(false);
      }); 
      
    } else if (event.key === 'Escape') {
      console.log("Esc")
      handleBlur();
    }
  }
  const handleBlur = () => { setIsEditing(false) };

  function getPublis(){
    //const promise = api.getPubli(id, auth.token);
    const promise = api.getPubli();
    promise.then((response) => {
    const apiPublis = response.data;
    setPublis(apiPublis);
  })
  .catch((err) => {
    console.log(err.response.data.message);
  }); 
  }

  function deleteIt(body) {
    console.log(body)
    console.log("deletando")
    const id=body; // acertar
    //const promise = api.deletePubli(id, auth.token);
/*     const promise = api.deletePubli(id);
    promise.then(() => {
        setModalOpened(false);
        getPublis();
    })
    .catch((err) => {
        console.log(err.response.data.message);
        setModalOpened(false);
        alert("Não foi possível excluir o post!");
    });  */  
  }

  //useEffect(getPublis, [publis]);

  return (
    publis.map(pub => (
      <>
      <PublicationContainer>
          <Image>
            <img src={pub.image} />
            {/* colocar os likes aqui */}
          </Image>
          <Content>
            <TrashButton onClick={edit}>
              <TiPencil size={20} color="white" />
            </TrashButton>
            <TrashButton2 onClick={open}>
              <IoMdTrash size={20} color="white" />
            </TrashButton2>
            <Modal
              isOpen={modalOpened}
              onRequestClose={close}
            >
              <h2>Are you sure you want to delete this post?</h2>
              <BackButton onClick={close}>No, go back</BackButton>
              <DelButton key={pub.id} onChange={deleteIt}>
                {isLoading ? (
                  <ThreeDots width={50} height={50} color="#fff" />
                ) : (
                  "Yes, delete it"
                )}
              </DelButton>
            </Modal> 
            <h3>{pub.name}</h3>
            {isEditing ? (
              <InputStyle 
              type="text" 
              ref={textRef} 
              disabled={isDisabled}
              defaultValue={pub.description} 
              onBlur={handleBlur} 
              onKeyDown={handleKeyDown} /> 
              ) : (  <p>{pub.description}</p>
            )}
            <div>
              <p>{pub.url}</p>
            </div>
          </Content>
      </PublicationContainer>
      </>
    ))
  );
}





