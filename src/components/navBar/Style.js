import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";


export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 72px;
  background-color: #151515;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
  h2 {
    font-family: "Passion One", cursive;
    color: #fff;
    font-style: normal;
    font-size: 49px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0.1rem;
    margin-left: 20px;
  }
`;

export const Style = styled.div`
  width: 105px;
  height: 72px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  img {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

export const IconDown = styled(AiOutlineDown)`
  font-size: 20px;
  color: #fff;
  align-items: center;
  cursor: pointer;
`;

export const IconUp = styled(AiOutlineUp)`
  font-size: 20px;
  color: #fff;
  align-items: center;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  background-color: #171717;
  border-radius: 0 0 20px 20px;
  width: 150px;
  height: 47px;
  position: absolute;
  bottom: -47px;
  right: 10px; 
  text-align: center;
  display: ${(props) => props.modal === true ? "block" : "none" };
  cursor: pointer;
  h1{
    color: #FFF;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 40px;
    letter-spacing: 0.05em;
  }
`
