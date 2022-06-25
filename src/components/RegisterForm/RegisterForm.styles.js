import styled from "styled-components";

export const RegisterForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50%;
`;

export const Textinput = styled.input`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 2rem;

  &::placeholder {
    font-size: 1.5rem;
  }
`;
