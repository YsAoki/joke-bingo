import styled from "styled-components";

// shouldForword用のサンプルコード
// export const SOverLay = styled.div.withConfig({
//   shouldForwardProp: (prop) => !['open'].includes(prop),
// })<{ open: boolean }>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color:rgba(64,64,64,0.4);
// `

export const SOverLay = styled.div <{$open: boolean}>`  
  display: ${({$open}) => $open? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(64,64,64,0.4);
`