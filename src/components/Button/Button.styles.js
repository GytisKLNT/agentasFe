import styled from "styled-components";

export const Button = styled.button`
  border: 0.05rem solid ${(props) => props.theme.colors.border.primary};
  background: ${(props) => props.theme.colors.background.secondary};
`;
