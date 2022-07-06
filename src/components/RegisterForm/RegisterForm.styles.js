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

export const Textinput = styled.input`
  border-radius: 0.3rem;
  border: 0.1rem solid gray;
  margin-bottom: 1.5rem;
  padding: 0.5rem;

  &::placeholder {
    font-size: 0.9rem;
  }
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
`;

export const BackArrow = styled.a`
  border-radius: 50%;
  color: gray;
  font-size: 1.5rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease-in;
  width: 2rem;

  &:hover {
    background-color: gray;
    color: black;
  }
`;
