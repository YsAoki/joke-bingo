import { Link } from "react-router-dom";
import styled from "styled-components";

export const SPageLink = styled(Link)`
  color: ${({theme}) => theme.color.oftenBlue};
  font-size: ${({theme}) => theme.fontSize.sm};
`