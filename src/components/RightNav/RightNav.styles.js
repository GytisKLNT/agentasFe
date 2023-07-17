import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  margin-right: 2rem;
  margin-top: 1rem;
  padding: 0;

  @media (max-width: 768px) {
    background-color: black;
    color: gray;
    flex-flow: column nowrap;
    font-size: 1.2rem;
    height: 100vh;
    margin-right: 0;
    margin-top: 0;
    padding-top: 4rem;
    position: fixed;
    left: 0;
    top: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    width: 12rem;

    li {
      padding: 2rem;
    }
  }
`;

export const Pages = styled(Link)`
  color: #c4c4c4;
  cursor: pointer;
  font-size: 1.2rem;
  padding-left: 2rem;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #ffff;
  }
`;
