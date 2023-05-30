import styled from "styled-components"
import { Link } from "react-router-dom"

export const ScreenContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #333;
    position: relative;
`
export const LogoContainer = styled.div`
    height: 100vh;
    width: 70vw;
    background-color: #151515;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.3);
    position: absolute;
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 30vh;
        width: 100vw; 
  }
`
export const TextContainer = styled.div`
    width: 450px;
    position: absolute;
    top: 25%;
    left: 10%;
    h1{
        font-family: 'Passion One', cursive;
        color: #fff;
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        letter-spacing: 0.1rem;
        line-height: 117px;
    }
    h2{
        font-family: 'Oswald', sans-serif;
        color: #fff;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
    }
    @media (max-width: 768px) {
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        left: auto;
        h1{
            font-size: 76px;
            position: relative;
            letter-spacing: 0;
            line-height: 0;
            margin-bottom: 20px;
        }
        h2{
            text-align: center;
            font-size: 23px;
            position: relative;
            letter-spacing: 0;
            line-height: 34px;
            width: 260px;
        }  
    }


`
export const FormContainer = styled.div`
    height: 100vh;
    width: 30vw;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center; 
    }
    @media (max-width: 768px) {
        height: 70%;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
`
export const StyledInput = styled.input`
  width: 80%;
  height: 35px;
  border: none;
  margin-bottom: 6px;
  padding: 10px;
  border-radius: 5px;
  font-size: 22px;
  line-height: 40px;

  &::placeholder{
    color: #9f9f9f;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
  }
  @media (max-width: 768px) {
        max-width: 400px;
    }
`
export const StyledButton = styled.button`
width: 85%;
height: 45px;
border: none;
border-radius: 5px;
cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  background: #1877F2;
  color: #FFF;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  @media (max-width: 768px) {
        max-width: 420px;
    }
`
export const StyledLink = styled(Link)`
    font-family: 'Lato';
    margin-top: 10px;
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
    color: #fff;
`