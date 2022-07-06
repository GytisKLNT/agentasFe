import styled from "styled-components";

export const StyledBurger = styled.div`
  cursor: pointer;
  display: none;
  height: 2rem;
  position: fixed;
  right: 2rem;
  top: 1.5rem;
  width: 2rem;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  div {
    background-color: ${({ open }) => (open ? "#c4c4c4" : "#ffffff")};
    border-radius: 1rem;
    height: 0.25rem;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
