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
  max-width: 30rem;
  margin: 15% auto;
  padding: 0 2rem;
`;

export const Textinput = styled.input`
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 0.1rem solid gray;

  &::placeholder {
    font-size: 0.9rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const BackArrow = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 1.5rem;
  border-radius: 50%;
  transition: 0.3s ease-in;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;

  &:hover {
    background-color: gray;
    color: black;
  }
`;
