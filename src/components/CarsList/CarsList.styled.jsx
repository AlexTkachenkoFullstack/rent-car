import styled from "styled-components";

export const CarsListContainer = styled.div`
flex-wrap: wrap;
justify-content: center;
padding: 0;
display: flex;
column-gap: 29px;
row-gap: 10px;
@media (min-width: 834px) {
    justify-content: space-around;
    row-gap: 50px;
  }
 @media (min-width: 1440px) {
    justify-content: start;
  }
`;

