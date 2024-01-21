import styled from "styled-components";

export const SRegularButton = styled.button`
  padding: 0;
  font-size: ${({theme}) => theme.fontSize.sm};
  color: ${({theme}) => theme.color.oftenBlack};
  background-color: initial;
  border: none;
`