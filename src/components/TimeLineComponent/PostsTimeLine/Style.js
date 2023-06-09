import styled from "styled-components";

export const Container = styled.div`
  width: 65%;
  height: 100% auto;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    border-radius: 0;
    height: 164px;
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  img {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin-top: 10px;
    background: #151515;
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Lato", cursive;
  h3 {
    color: #707070;
    font-style: normal;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.1rem;
    margin: 10px 0 10px 0;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 17px;
        margin: 7px 0 7px 0;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 97%;
      height: 30px;
      margin-bottom: 10px;
      background: #efefef;
      border: none;
      border-radius: 5px;
      align-self: flex-start;
      @media (max-width: 768px) {
        height: 30px;
        width: 90%;
        margin-bottom: 7px;
        align-self: center;
      }
    }
    textarea {
      width: 97%;
      height: 66px;
      margin-bottom: 10px;
      background: #efefef;
      border: none;
      resize: none;
      border-radius: 5px;
      align-self: flex-start;
      @media (max-width: 768px) {
        height: 47px;
        width: 90%;
        align-self: center;
        margin-bottom: 7px;
      }
    }
    &::placeholder {
      color: #9f9f9f;
      font-family: "Oswald", sans-serif;
      font-weight: 700;
    }
    button {
      align-self: flex-end;
      margin-right: 10px;
      background: #1877f2;
      width: 112px;
      height: 31px;
      border-radius: 5px;
      border: none;
      color: #ffffff;
      cursor: pointer;
      @media (max-width: 768px) {
        height: 22px;
        margin-right: 17px;
      }
    }
  }
`;
export const Button = styled.button`  
  height: 61px;
  width: 611px;
  left: 241px;
  top: 481px;
  border-radius: 16px;
  background-color:#1877F2;
  margin-left:0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  color:white;
  margin-left:45px;
  margin-bottom:20px;
  `