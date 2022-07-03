import styled from "styled-components";

export const DeleteButton = styled.button`
  border-radius: 0.2rem;
  border: none;
  background-color: #f5d4d4;
  color: red;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  margin-right: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #914646;
  }
`;
