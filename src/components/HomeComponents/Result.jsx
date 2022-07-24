import React from "react";
import styled from "styled-components";

function Result({ title, paragraph }) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </Wrapper>
  );
}

export default Result;

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  h3 {
    font-size: 42px;
    text-decoration: unset;
    background: linear-gradient(135deg, #6009a5 0%, #0c78cc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    white-space: nowrap;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    color: #555555;
  }
`;
