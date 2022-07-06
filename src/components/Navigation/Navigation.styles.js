import styled from "styled-components";

export const Header = styled.nav`
  width: 100%;
  background-color: black;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
`;

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;

  li {
    padding-left: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
