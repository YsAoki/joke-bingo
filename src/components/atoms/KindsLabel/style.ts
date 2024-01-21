import styled from "styled-components";

export const SKindsLabel = styled.li`
 text-align: center;
 line-height: 22px;
 font-size: ${({theme}) => theme.fontSize.xs};
 width: 160px;
 color: ${({theme}) => theme.color.oftenBlue};
 border: 1px solid ${({theme}) => theme.color.oftenBlue};
 border-radius: 4px;
`