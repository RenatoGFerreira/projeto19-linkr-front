import styled from "styled-components";
import { IoMdPaperPlane } from 'react-icons/io'; 

export const BoxComment = styled.div`
  /* z-index: -1; */
  position: absolute;
  left: 0px;
  top: 256px;
  width: 100%;
  height: auto;
  background: #1E1E1E;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 25px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    border-radius: 0;
  }
  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-bottom: 15px;
    background: #151515;
  }
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    width: 82%;
    height: 39px;
    background: #252525;
    border-radius: 8px; 
    outline: none;
    padding: 11px 15px;
    font-size: 16px;
    outline: none; 
    box-shadow: none;
    border: none;
    font-family: 'Lato';
    font-size: 14px;
    color: #ACACAC;
    &::placeholder {
        font-style: italic;
        color: #575757;
    } 
`;

export const Plane = styled(IoMdPaperPlane)`
  font-size: 20px;
  color: #AC0000;
  align-items: center;
  cursor: pointer;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 71px;
`;
export const CommentData = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentLine = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid #353535;
  transform: rotate(-0.1deg);
`;
export const InsertComment = styled.div`
  display: flex;
  flex-direction: row;
`;