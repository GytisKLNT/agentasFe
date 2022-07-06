import styled from "styled-components";

export const DeleteButton = styled.button`
  background-color: #f5d4d4;
  border-radius: 0.2rem;
  border: none;
  color: red;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  height: 2.5rem;
  margin-right: 1rem;
  text-align: center;
  transition: background-color 0.3s ease;
  width: 2.5rem;

  &:hover {
    background-color: #914646;
  }
`;
