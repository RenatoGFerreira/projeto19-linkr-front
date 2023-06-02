import styled from "styled-components";

export const Container = styled.div`
  width: 65%;
  height: 100%;
  margin-right: 20px;
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
    margin: 15px;
    margin-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 90%;
      height: 30px;
      margin-bottom: 10px;
      background: #efefef;
      border: none;
      border-radius: 5px;
    }
    &::placeholder{
    color: #9f9f9f;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    }
    button {
      align-self: flex-end;
      margin-right: 20px;
      background: #1877f2;
      width: 112px;
      height: 31px;
      border-radius: 5px;
      border: none;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;
