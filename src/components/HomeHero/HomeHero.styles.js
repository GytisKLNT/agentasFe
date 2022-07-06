import styled from "styled-components";
import background from "../../assets/homeBg.jpg";

export const HomeHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  margin-top: 5rem;
  min-height: 100vh;
  padding: 2rem 1rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
`;
