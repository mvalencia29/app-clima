import styled from "styled-components";

const MainContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 90%;
  }
`;

export default MainContainer;
