import styled from "styled-components";
import background from "../../assets/homeBg.jpg";

export const HomeHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
`;
