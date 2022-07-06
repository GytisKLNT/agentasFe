import styled from "styled-components";

export const Card = styled.div`
  background-color: #000000;
  border-radius: 0.2rem;
  box-shadow: 0.5px 0.5px 5px 0.5px rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
`;

export const List = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled.p`
  border-bottom: 0.02rem solid lightgray;
  font-size: 0.8rem;
  padding: 1rem 1rem;
  text-align: center;
`;

export const Span = styled.span`
  color: #50e9fe;
`;
