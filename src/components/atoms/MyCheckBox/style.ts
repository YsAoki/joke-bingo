import styled from "styled-components";

export const SCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 14px;
`;

export const SCheckBoxLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  padding-left: 24px;
  height: 16px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: 0.2s;
  }
  &:before {
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    background: #fff;
    border: 1px solid grey;
    border-radius: 4px;
    box-sizing: border-box;
  }
  &:after {
    left: 2px;
    top: 3px;
    width: 12px;
    height: 8px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
    opacity: 0;
  }
`;

export const SCheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  position: absolute;
  cursor: pointer;
  margin: 0;
  top: 0;
  left: 0;
  &:checked + ${SCheckBoxLabel}:before {
    background-color: #1D7DDD;
    border: none;
  }
  &:checked + ${SCheckBoxLabel}:after {
    opacity: 1;
  }
`;