import { PublicationContainer, Image, Content, IconHeart, IconHeartfill, TextLike, LikeContainer,TextLikeHover } from "./Style";
  import urlMetadata from "url-metadata";
  import { useEffect, useState, useContext } from "react";
import apiLikes from "../../../services/apiLike";


export default function Publication({ user, name, image, url, likes, description, likebyuser, postid }) {
  const [liked, setLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(likes);
  const [linkMetadata, setLinkMetadata] = useState(null);
  const [form, setForm] = useState({
    likebyuser: likebyuser,
    postid: postid,
  });

  console.log(url)

  useEffect(() => {
    getLikes()
  }, [])

  function changeLike() {
    if (liked) {
      setLiked(!liked);
      setLikesAmount(likesAmount - 1);
      removeLike()
    } else {
      setLiked(!liked);
      setLikesAmount(likesAmount + 1);
      insertLike()
    }
  }

  function insertLike() {
    apiLikes.insertLike(form)
      .then(res => {
        console.log(form)
        const ls = res.data
        console.log(res.data)
      })
      .catch(err => {
        alert(err.response.data)
      })
  }

  function removeLike() {
    apiLikes.deleteLike(form)
      .then(res => {
        const ls = res.data
        console.log(ls)
      })
      .catch(err => {
        alert(err.response.data)
      })
  }

  function getLikes(){
    apiLikes.getTotalLikes(postid)
    .then(res => {
      const ls = res.data
      console.log(ls)
    })
    .catch(err => {
      alert(err.response.data)
    })
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

  return (
    <PublicationContainer>
      <Image>
        {/* colocar os likes aqui */}
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
        <h3>{name}</h3>
        <p>{description}</p>
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
