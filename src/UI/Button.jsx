import React from "react";
import styled from "styled-components";

function Button({ children, darkHover = false, ...rest }) {
  return (
    <Wrapper
      className={`flex justify-center align-center ${
        darkHover ? "dark-hover" : ""
      }`}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
const Wrapper = styled.button`
  padding: 16px 50px;
  background: linear-gradient(
    101.95deg,
    rgba(41, 165, 218, 0.58) 6.12%,
    #29a5da 52.44%,
    rgba(41, 165, 218, 0.69) 90.86%
  );
  background-position: 0 0;
  background-repeat: repeat;
  border-radius: 5px;
  color: white;
  border: 0;
  gap: 20px;
  transition: all 0.3s;
  &.sm {
    padding: 16px;
  }
  &:disabled {
    background-color: #4bb543;
    border-color: #4bb543;
    &:hover {
      cursor: not-allowed !important;
    }
  }
  &.dark-hover {
    &:hover {
      cursor: pointer;
      color: white;
    }
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 5px 2px #79797937;
  }
`;
