import React from "react";
import styled from "styled-components";

function Devider({ half = false, children }) {
  return <Wrapper className={`${half ? "half" : ""}`}>{children}</Wrapper>;
}

export default Devider;
const Wrapper = styled.div`
  padding: 50px 0;
  @media (max-width: 767px) {
    padding: 35px 0;
  }
  &.half {
    padding: 30px 0;
    @media (max-width: 767px) {
    padding: 20px 0;
  }
  }
`;
