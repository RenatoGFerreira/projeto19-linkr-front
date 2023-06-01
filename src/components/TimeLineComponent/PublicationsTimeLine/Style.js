import styled from "styled-components";

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
