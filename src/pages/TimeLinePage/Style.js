import styled from "styled-components";

export const Container = styled.div`
  width: 81%;
  height: 100% auto;
  position: relative;
  margin-top: 72px;
  @media (max-width: 768px) {
        width: 100%; 
  }
  h2{
    font-family: "Oswald", cursive;
    color: #fff;
    font-style: normal;
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0.1rem;
    margin: 40px 0 25px 20px;
  }
`

export const TimeContainer = styled.div`
     width: 94%;
     height: 100% auto;
     position: relative;
     margin-left: 25px;
     display: flex;
     justify-content: space-between;   
     @media (max-width: 768px) {
        width: 100%; 
        margin-left: 0;
  }  
`


// Estilo Trending

