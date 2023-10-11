import styled from "styled-components";

export const FavoritesPageContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    height:100%;
`

export const SideBarContainer = styled.div`
width: 250px;
min-height: calc(100vh - 225px);
height:auto;
background-color: #f0f0f0;
padding: 20px;
display: flex;
flex-direction: column;
flex-shrink: 0;
border-radius: 14px;
`

export const MainContentContainer = styled.div`
  flex: 1; 
  padding: 20px;
  display: grid;
  grid-gap: 20px;
`;

export const NoContentContainer=styled.div`
display:flex;
flex-direction:column;
width:100%;
padding-top:30px;
`
export const NoContentText=styled.p`
margin-left:auto;
margin-right:auto;
font-size:20px;
line-height:1.6;
font-weight:500;
font-family: Manrope, sans-serif;
`