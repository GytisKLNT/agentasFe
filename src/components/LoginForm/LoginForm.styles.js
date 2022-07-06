import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 15% auto;
  max-width: 30rem;
  padding: 0 2rem;
`;

export const Link = styled.a`
  color: gray;
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: black;
  }
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
