import styled from "styled-components";

export const Card = styled.div`
  padding: 2rem 1rem;

  background-color: #000000;
  color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0.5px 0.5px 5px 0.5px rgba(0, 0, 0, 0.75);
  text-align: center;
  display: flex;
  max-width: 30rem;
  margin: 2rem auto;
  justify-content: space-around;

  p {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  li {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const Span = styled.span`
  color: #50e9fe;
`;
