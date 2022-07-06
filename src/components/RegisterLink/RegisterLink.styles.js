import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterLink = styled(Link)`
  background-color: #e3fcff;
  border-radius: 0.3rem;
  border: 0.1rem solid #50e9fe;
  color: #50e9fe;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 5rem;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background-color: #40a3b1;
  }
`;

export const Span = styled.span`
  color: #00e1ff;
  font-weight: bold;
  margin-left: 0.2rem;
`;
