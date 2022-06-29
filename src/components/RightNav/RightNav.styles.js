import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  li {
    padding-left: 2rem;
  }

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
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;
    font-size: 1.5rem;

    li {
      padding: 2rem;
    }
  }
`;
