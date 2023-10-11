import styled from "styled-components";

export const BodyContainer=styled.div`
min-height: 100vh;
 display: flex;
flex-direction: column;
`

export const MainContainer=styled.main`
flex: 1; 
overflow: auto;
padding-top: 0;
@media (min-width: 834px) {
    padding-top: 20px;
  }
`