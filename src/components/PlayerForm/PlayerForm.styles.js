import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const PlayerForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  margin: 15% auto;
  padding: 2rem;
  background-color: #ffff;
  border-radius: 2rem;
`;
