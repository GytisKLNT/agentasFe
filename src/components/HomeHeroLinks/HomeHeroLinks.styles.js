import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroLink = styled(Link)`
  padding: 2rem;
  margin: 2rem;
  border: none;
  border-radius: 0.3rem;
  background-color: #50e9fe;
  color: white;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-size: 1.5rem;
  box-sizing: border-box;

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
