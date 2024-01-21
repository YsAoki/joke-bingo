import { styled } from "styled-components";

export const SInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SInput = styled.input<{hasIcon: boolean}>`
  width: 100%;
  padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md};
  padding-left: ${({ theme, hasIcon }) => hasIcon ? `calc(${theme.spacing.md} + ${theme.spacing['2xl']})` : theme.spacing.md};
  font-size: ${({theme}) => theme.fontSize.md};
`;

export const SIconWrapper = styled.div`
  position: absolute;
  left: ${({theme}) => theme.spacing.md};
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: ${({theme}) => theme.spacing.md};
`;

