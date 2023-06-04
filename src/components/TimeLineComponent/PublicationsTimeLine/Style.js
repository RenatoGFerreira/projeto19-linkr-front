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
`;

export const Image = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin-top: 10px;
    background: #151515;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Lato", cursive;
  h3 {
    color: #FFFFFF;
    font-style: normal;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.1rem;
    margin: 15px;
    margin-top: 10px;
  }
  p {
    color: #B7B7B7;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    margin: 15px;
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
