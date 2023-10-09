import styled from "styled-components";

export const FavoritesPageContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    height:100%;
`

export const SideBarContainer = styled.div`
width: 250px;
min-height: calc(100vh - 185px);
height:auto;
background-color: #f0f0f0;
padding: 20px;
display: flex;
flex-direction: column;
flex-shrink: 0;
`

export const MainContentContainer = styled.div`
  flex: 1; 
  padding: 20px;
  display: grid;
  grid-gap: 20px;
`;