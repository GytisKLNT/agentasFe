import styled from "styled-components";

export const Header = styled.nav`
  align-items: center;
  background-color: black;
  border-bottom: 2px solid gray;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Logo = styled.img`
  height: 5rem;
  width: 5rem;
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
