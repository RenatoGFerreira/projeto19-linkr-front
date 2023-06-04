import styled from "styled-components";
import ReactModal from "react-modal";
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
  position: relative;
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
  }
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
  width: 503px;
  /* height: auto; */
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
`