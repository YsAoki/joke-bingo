import styled from "styled-components";

export const SPaperWrapper = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.color.white};
  box-shadow: ${({theme}) => theme.other.shadow};
  border-radius: ${({theme}) => theme.spacing.sm};
`