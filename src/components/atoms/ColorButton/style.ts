import styled from "styled-components";

export const SColorButton = styled.button<{
  $backColor: string;
  $textColor: string;
  $borderColor: string;
}>`
  background-color: ${(props) => props.$backColor};
  color: ${(props) => props.$textColor};
  border: 1px solid ${(props) => props.$borderColor};
  line-height: 40px;
  width: 160px;
  font-size: 14px;
  border-radius: 4px; 
  span {
    margin-right: ${({theme}) => theme.spacing.sm};
  };
`