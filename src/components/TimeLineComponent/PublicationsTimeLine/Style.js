import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const PublicationContainer = styled.div`
  width: 100%;
  height: 276px;
  background: #171717;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

export const Image = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin: 10px 0 10px 10px;
  img {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin-bottom: 15px;
    background: #151515;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Lato", cursive;
  margin: 0 0 0 10px;
  h3 {
    color: #FFFFFF;
    font-style: normal;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.1rem;
    margin: 10px 0 10px 0;
  }
  p {
    color: #B7B7B7;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
  }
  a {
    width: 80%;
    height: 110px;
    background: #fff;
    text-decoration: none;
  }
`;

export const LikeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
:hover{
  h4{
    display: block;
  }
}
h4{
  display: none;
}
`;

export const TextLikeHover = styled.h4`
  background-color: rgba(255, 255, 255, .9);
  color: #000;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  margin-top: 5px;
  padding: 2px 3px;
  position: absolute;
  bottom: -30px;
  width: 169px;
  text-align: center;
`;


export const IconHeartfill = styled(AiFillHeart)`
  font-size: 20px;
  color: #AC0000;
  align-items: center;
  cursor: pointer;
`;

export const IconHeart = styled(AiOutlineHeart)`
  font-size: 20px;
  color: #fff;
  align-items: center;
  cursor: pointer;
`;

export const TextLike = styled.h3`
  color: #fff;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  margin: 5px;
`;
