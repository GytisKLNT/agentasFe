import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 2rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
