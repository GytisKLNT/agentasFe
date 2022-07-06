import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroLink = styled(Link)`
  background-color: #50e9fe;
  border-radius: 0.3rem;
  border: none;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 2rem;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #40a3b1;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
