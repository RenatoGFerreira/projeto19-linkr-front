import { PublicationContainer, Image, Content, 
  IconHeart, IconHeartfill, TextLike, LikeContainer,TextLikeHover,
  TrashButton, TrashButton2, Modal, BackButton, DelButton, InputStyle } from "./Style";
import { useEffect, useState, useRef, useContext } from "react";
import urlMetadata from "url-metadata";
//import ReactModal from "react-modal";
import { IoMdTrash } from "react-icons/io";
import { TiPencil } from "react-icons/ti";
import { ThreeDots } from "react-loader-spinner";
//import axios from "axios";
import api from "../../../services/api";
import { AuthContext } from "../../../contexts/AuthContext";


export default function Publication({ key, user, name, image, url, likes, description }) {
  const { Auth } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(likes);
  const [linkMetadata, setLinkMetadata] = useState(null);
  const [form, setForm] = useState({
    likebyuser: "",
    postid: "",
  });

  console.log(`Auth é o ${Auth}`)

  function changeLike() {
    if (liked) {
      setLiked(!liked);
      setLikesAmount(likesAmount - 1);
    } else {
      setLiked(!liked);
      setLikesAmount(likesAmount + 1);
    }
  }

  useEffect(() => {
    fetchLinkMetadata();
  }, [url]);

  async function fetchLinkMetadata() {
    try {
      const metadata = await urlMetadata(url);
      console.log(metadata)
      setLinkMetadata(metadata);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os metadados do link:", error);
    }
  }

  //meu código  
  const [modalOpened, setModalOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const textRef = useRef(null);
  
  const open = () => { setModalOpened(true) };
  const close = () => { setModalOpened(false) };
  const edit = () => { 
    setIsEditing(!isEditing);
    //verificar o requisito focus
    /* if(isEditing === true){
      textRef.current.focus()
    } */
  };
  function deleteIt(key, user) {
    console.log(user, key)
    console.log("deletando")
    //const promise = api.deletePubli(id, auth.token);
/*  
    const body = {id: key, user: user}
    const promise = api.deletePubli(body);
    promise.then(() => {
        setModalOpened(false);
        //chamar função para atualizar página
    })
    .catch((err) => {
        console.log(err.response.data.message);
        setModalOpened(false);
        alert("Não foi possível excluir o post!");
    });  */  
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsDisabled(true);
      const body = {id: key, user: user, description: event.target.value}
      console.log(body)
      const promise = api.updatePubli(body);
      promise.then(() => {
        setIsDisabled(false);
        //chamar função para atualizar pagina
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

  return (
    <PublicationContainer>
      <Image>
        <img src={image} alt="description"/>
        <LikeContainer>
          {liked ? (
            <IconHeartfill onClick={changeLike} />
          ) : (
            <IconHeart onClick={changeLike} />
          )}
          {likes === 1?(
            <TextLike>{likes} like</TextLike>
          ):(
            <TextLike>{likes} likes</TextLike>
          )}
          <TextLikeHover>Fulano, cicrano e outras 20 pessoas</TextLikeHover>
        </LikeContainer>
      </Image>
      <Content>
        {<TrashButton onClick={edit}>
          <TiPencil size={20} color="white" />
        </TrashButton>}
        <TrashButton2 onClick={open}>
          <IoMdTrash size={20} color="white" />
        </TrashButton2>
        <Modal isOpen={modalOpened} onRequestClose={close} >
          <h2>Are you sure you want to delete this post?</h2>
          <BackButton onClick={close}>No, go back</BackButton>
          <DelButton key={key} onChange={deleteIt}>
              {isLoading ? (
                <ThreeDots width={50} height={50} color="#fff" />
              ) : (
                "Yes, delete it"
              )}
          </DelButton>
        </Modal> 
        <h3>{name}</h3>
        {isEditing ? (
              <InputStyle 
              type="text" 
              ref={textRef} 
              disabled={isDisabled}
              defaultValue={description} 
              onBlur={handleBlur} 
              onKeyDown={handleKeyDown} /> 
              ) : (  <p>{description}</p>
        )}
        <div>
          <p>Image: </p>
          <h3>{user}</h3>
          <p>{description}</p>
          <p>{url}</p>
        </div>
      </Content>
    </PublicationContainer>
  );
}





