import styled from "styled-components";

export const Header = styled.nav`
  align-items: center;
  background-color: black;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Logo = styled.img`
  height: 6rem;
  width: 6rem;
  margin-left: 3.5rem;
  cursor: pointer;

  /* @media (min-width: 768px) {
    display: none;
  } */

`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding-left: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
