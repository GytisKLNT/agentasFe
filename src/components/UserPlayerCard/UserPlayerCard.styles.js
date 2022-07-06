import styled from "styled-components";

export const Card = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 0.2rem;
  box-shadow: 0.5px 0.5px 5px 0.5px rgba(0, 0, 0, 0.75);
  color: #fff;
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
  max-width: 30rem;
  padding: 2rem 1rem;
  text-align: center;

  p {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    display: block;
    margin: 1rem;
  }
`;

export const List = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

export const Span = styled.span`
  color: #50e9fe;
`;
