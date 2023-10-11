import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
  z-index:999;
`;

export const MenuModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  padding:20px;
  width: 90%;
  height: 90%;
  max-width: 275px;
  max-height: 380px;
  border-radius: 24px;
  background-color: rgb(197 239 187);
  @media (min-width: 834px) {
    max-width: 450px;
  }
`;

export const CloseModalIcon=styled(AiOutlineClose)`
position:absolute;
right:10px;
top:10px;
width:18px;
height:18px;

&:hover, &:focus{
    color:rgb(151 14 26);
}
`