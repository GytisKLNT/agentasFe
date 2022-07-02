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
  width: calc(33.33% - 2rem);
  margin: 1rem;

  @media (max-width: 600px) {
    width: 90%;
    margin: 1rem auto;
  }
`;
