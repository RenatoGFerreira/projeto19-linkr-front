import {
  PublicationContainer,
  Image,
  Content,
  IconHeart,
  IconHeartfill,
  TextLike,
  LikeContainer,
  TextLikeHover,
  TrashButton,
  TrashButton2,
  BackButton,
  DelButton,
  InputStyle,
  Buttons,
  Modal,
  tagStyle,
} from "./Style";
import React, { useEffect, useState, useRef, useContext } from "react";
import { IoMdTrash } from "react-icons/io";
import { TiPencil } from "react-icons/ti";
import { ThreeDots } from "react-loader-spinner";
import apiPosts from "../../../services/apiPost";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { Tagify } from "react-tagify";

export default function Publication({ userId, id, name, image, url, likes, description, getPostList }) {
  const { auth } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(likes);
  const [form, setForm] = useState({
    likebyuser: "",
    postid: "",
  });
  const [modalOpened, setModalOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const textRef = useRef(null);
  const token = auth.token;
  const navigate = useNavigate();


  const user = auth.id;

  function changeLike() {
    if (liked) {
      setLiked(!liked);
      setLikesAmount(likesAmount - 1);
    } else {
      setLiked(!liked);
      setLikesAmount(likesAmount + 1);
    }
  }

  const open = () => { setModalOpened(true) };
  const close = () => { setModalOpened(false) };
  const edit = () => { setIsEditing(!isEditing)};
  function cursor() { textRef.current.focus()}

  useEffect(() => {
    if (isEditing) {
      cursor();
    }
  }, [isEditing]);

  function deleteIt(e) {
    setIsLoading(true);
    const id = e.target.id;
    const body = { id: id };
    const promise = apiPosts.deletePost(body, token);
    promise
      .then(() => {
        setModalOpened(false);
        setIsLoading(false);
        window.location.reload(true);
      })
      .catch((err) => {
        getPostList();
    })
    .catch((err) => {

        console.log(err.response.data);
        setModalOpened(false);
        setIsLoading(false);
        alert("Não foi possível excluir o post!");
      });
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsDisabled(true);
      const body = { id: id, description: event.target.value };
      const promise = apiPosts.updatePost(body, token);
      
      promise.then(() => {
        setIsDisabled(false);
        //chamar função para atualizar pagina
        getPostList();
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("Não foi possível salvar as alterações!");
        setIsDisabled(false);
      }); 
      
    } else if (event.key === 'Escape') {
      handleBlur();
    }
  };
  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <PublicationContainer>
      <Image>
        <img src={image} alt="description" />
        <LikeContainer>
          {liked ? <IconHeartfill onClick={changeLike} /> : <IconHeart onClick={changeLike} />}
          {likes === 1 ? <TextLike>{likes} like</TextLike> : <TextLike>{likes} likes</TextLike>}
          <TextLikeHover>Fulano, cicrano e outras 20 pessoas</TextLikeHover>
        </LikeContainer>
      </Image>
      <Content>
        {(userId !== user) ? (
          ""
        ) : (
            <>
            <TrashButton data-test="edit-btn" onClick={edit}>
              <TiPencil size={20} color="white" />
            </TrashButton>
            <TrashButton2 data-test="delete-btn" onClick={open}>
              <IoMdTrash size={20} color="white" />
            </TrashButton2> 
            </>
        )}
        <Modal 
        isOpen={modalOpened} 
        onRequestClose={close}
        appElement={document.getElementById('root')}>
          <h2>Are you sure you want to delete this post?</h2>
          <Buttons>
            <BackButton data-test="cancel" onClick={close}>
              No, go back
            </BackButton>
            <DelButton data-test="confirm" id={id} onClick={(event) => deleteIt(event)}>
              {isLoading ? <ThreeDots width={50} height={50} color="#fff" /> : "Yes, delete it"}
            </DelButton>
          </Buttons>
        </Modal>

        <h3 className="name">{name}</h3>

        {isEditing ? (
          <InputStyle
            data-test="edit-input"
            type="text"
            ref={textRef}
            disabled={isDisabled}
            defaultValue={description}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <></>
        )}

        <h3 className="user">{user}</h3>
        <Tagify onClick={(tag) => navigate(`/hashtag/${tag}`)} tagStyle={tagStyle}>
          <p className="description">{description}</p>
        </Tagify>
        <Link to={url} target="_blank">
          <p className="url">{url}</p>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{url}</p>
        </Link>
      </Content>
    </PublicationContainer>
  );
}
