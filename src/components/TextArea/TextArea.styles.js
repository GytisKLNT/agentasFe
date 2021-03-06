import styled from "styled-components";

export const TextArea = styled.textarea`
  border-radius: 0.3rem;
  border: 0.1rem solid gray;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  width: 100%;

  &::placeholder {
    font-size: 0.9rem;
  }
`;
