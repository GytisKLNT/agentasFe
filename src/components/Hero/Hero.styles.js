import styled from "styled-components";

export const Hero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1590227632180-80a3bf110871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=615&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  width: 50%;
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

export const Logo = styled.img`
  width: 15rem;
  box-sizing: border-box;
  margin-top: 25%;
`;
