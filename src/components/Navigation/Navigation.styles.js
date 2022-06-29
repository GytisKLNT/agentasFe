import styled from "styled-components";

export const Header = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid gray;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  padding: 15px 0;
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
