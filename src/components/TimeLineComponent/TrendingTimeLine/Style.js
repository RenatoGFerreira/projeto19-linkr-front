import { AiOutlineFullscreenExit } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  width: 81%;
  height: 100% auto;
  position: relative;
  margin-top: 72px;
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
     height: 100vh;
     position: relative;
     margin-left: 25px;
     display: flex;
     justify-content: space-between;    
     `

export const Trending = styled.div`
      margin-top:0px;
      background: #171717;
      width:400px;
      height:700px;
      margin-left:40px;
      border-radius: 16px;
      @media (max-width: 768px) {
         display: none;
      }

      h2{
        text-align:left;
        margin-top:0px;
        margin-bottom:5px;
      }
      
      `


export const HashtagTrending= styled.div`
      display:flex;
    
`

export const Hashtag = styled.div`

      text-align:center;
      margin-top:10px;
      text-align:left;
      margin-left:20px;
      font-family: Lato;
      font-size: 19px;
      font-weight: 700;
      line-height: 23px;
      letter-spacing: 0.05em;
      color: #FFFFFF;
`


export const ContainerHashtag = styled.div`
      text-align:center;
      margin-top:10px;

`


export const Separator = styled.div`
    height: 1px;
    background-color: white;
    margin-top: 0px;
`;


export const ConteudoHashtagTrending = styled.div`
 display:flex;
`
