import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 2rem;
  margin-top: 1rem;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    color: gray;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 12rem;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
    font-size: 1.2rem;
    margin-right: 0;
    margin-top: 0;

    li {
      padding: 2rem;
    }
  }
`;

export const Pages = styled(Link)`
  padding-left: 2rem;
  color: #c4c4c4;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #ffff;
  }
`;
