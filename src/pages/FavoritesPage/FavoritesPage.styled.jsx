import styled from "styled-components";

export const FavoritesPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    height:100%;
    @media (min-width: 834px) {
flex-direction: row;
}
`

export const SideBarContainer = styled.div`
display:none;
@media (min-width: 834px) {
  width: 250px;
min-height: calc(100vh - 225px);
height:auto;
background-color: #f0f0f0;
padding: 20px;
display: flex;
flex-direction: column;
flex-shrink: 0;
border-radius: 14px;
}
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
font-size:13px;
line-height:1.25;
font-weight:500;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
  font-size:20px;
  line-height:1.6;
}
`

export const ButtonFilterContainer=styled.div`
display:flex;
align-items: flex-start;
justify-content: center;
padding-bottom: 10px;
@media (min-width: 834px) {
    display:none;
    align-items: center;
  }
`

export const ButtonFilter=styled.button`
width:274px;
height:30px;
border-radius: 7px;
background-color:rgba(52, 112, 255, 1);
color:rgba(255, 255, 255, 1);
font-size:16px;
line-height:1.1;
font-family: Manrope, sans-serif;
font-weight:500;
border: none;

&:hover, &:focus{
background-color:rgba(11, 68, 205, 1);
}
`