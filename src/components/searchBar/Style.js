import styled from "styled-components";

export const SearchBarBox = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 13px;
  left: 30vw;

    input {
      padding: 9px 0 13px 14px;
      width: 563px;
      height: 45px;
      border-radius: 8px;
      border-style: none;
      font-size: 19px;
      background-image: url();
      background-size: 21px;
      background-repeat: no-repeat;
      background-position: 525px 12px;

      &:focus{
        outline: none;
      }
    }
`;

export const DropBox = styled.div`
  background-color: #E7E7E7;
  border-radius: 8px;
`;

export const UserColumn = styled.ul`
  display: flex;
  flex-direction: column;

    li {
      display: flex;
      align-items: center;
      padding: 14px 0 16px 17px;
      cursor: pointer;

      img {
        width: 39px;
        height: 39px;
        border-radius: 20px;
      }

      p {
        margin-left: 12px;
        font-size: 19px;
        font-family: "Lato";
        color: #515151;
      }
    }
`;


