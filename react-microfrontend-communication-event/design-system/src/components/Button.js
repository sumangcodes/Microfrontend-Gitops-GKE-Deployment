// src/components/Button.js
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.button.backgroundColor};
  color: ${(props) => props.theme.button.color};
  border: ${(props) => props.theme.button.border};
  padding: ${(props) => props.theme.spacing(2)};
  font-family: ${(props) => props.theme.button.fontFamily};
  cursor: pointer;
  border-radius: ${(props) => props.theme.button.borderRadius};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default Button;