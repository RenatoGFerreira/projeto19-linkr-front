import styled from "styled-components";
import ReactModal from "react-modal";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const PublicationContainer = styled.div`
  width: 100%;
  height: 276px auto;
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
  position: relative;
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
    cursor: pointer;
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

export const UrlContainer = styled.div`
  width: 98%;
  height: 155px auto;
  box-sizing: border-box;
  border: 1px solid #4D4D4D;
  border-radius: 11px;
  display: flex;
  margin: 5px 0 10px 0 ;
  img{
    width: 153px;
    height: 155px auto;
    border-radius: 0px 12px 13px 0px; 
  }
`

export const DetailsUrl = styled.div`
  width: 84%;
  margin-left: 5px;
  h3{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;
  }
  p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
    margin: 10px 0 15px 0;
  }
`

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


export const TrashButton = styled.button`
  position: absolute;
  right:35px;
  top: 15px;
  background-color: transparent;
  border:none;
  font-size: 16px;
`;
export const TrashButton2 = styled.button`
  position: absolute;
  right: 10px;
  top: 15px;
  background-color: transparent;
  border:none;
  font-size: 16px;
`;

export const Modal = styled(ReactModal)`
  overlay {
    z-index: 4;
  }
  width: 597px;
  height: 262px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333333;
  border-radius: 50px;
  font-family: 'Lato';
  font-weight: 700;
  text-align: center;
  h2{
    font-size: 34px;
    line-height: 41px;
    color: #FFFFFF;
    margin: 39px;
    margin-bottom: 26px
  }
  button{
    font-size: 18px;
    line-height: 22px;
    margin: 13px;
    border-radius: 5px;
    width: 134px;
    height: 37px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const BackButton = styled.button`
    background: #FFFFFF;
    color: #1877F2;
`;
export const DelButton = styled.button`
    background: #1877F2;
    color: #FFFFFF;
`;

export const InputStyle = styled.textarea`
  width: 90%;
  height: auto;
  margin: 0 10px;
  white-space: pre-wrap; 
  font-family: 'Lato';
  font-weight: 400;
  font-size: 14px;
  color: #4C4C4C;
  padding: 5px;
  border: none;
  outline: none;
  background: #FFFFFF;
  border-radius: 7px;
  overflow: auto;
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

export const tagStyle = {
  fontWeight: "bold",
  color: "#FFFFFF",
  cursor: "pointer",
};