import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.blue.default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0;
  cursor: pointer;
  box-shadow: 0 2px 2px lightgray;
  transition: ease background-color 250ms;
    
  &:hover {
    background-color: ${(props) => props.theme.blue.hover};
  }
    
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
