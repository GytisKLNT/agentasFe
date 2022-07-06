import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const TeamForm = styled.form`
  background-color: #ffff;
  border-radius: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 15% auto;
  max-width: 30rem;
  padding: 1rem 2rem;
`;
