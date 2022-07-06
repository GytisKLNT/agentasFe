import styled from "styled-components";
import Card from "../Card/Card";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const CardItem = styled(Card)`
  box-sizing: border-box;
  margin: 1rem;
  width: calc(33.33% - 2rem);

  @media (max-width: 600px) {
    margin: 1rem auto;
    width: 90%;
  }
`;
