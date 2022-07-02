import styled from "styled-components";

export const Card = styled.div`
  padding: 2rem 1rem;
  background-color: #b5b5b5;
  border-radius: 0.2rem;
  box-shadow: 0.5px 0.5px 5px 0.5px rgba(0, 0, 0, 0.75);
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  li {
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled.p`
  border-bottom: 0.02rem solid lightgray;
  padding: 1rem 1rem;
  text-align: center;
  font-size: 0.8rem;
`;
