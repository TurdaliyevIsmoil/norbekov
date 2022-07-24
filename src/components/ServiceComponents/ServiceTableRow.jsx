import React from "react";
import styled from "styled-components";

function ServiceTableRow({ aqua = false }) {
  return (
    <Wrapper className={`flex column ${aqua ? "fulled" : ""}`}>
      <p className="main">Baxtli ayol sirlari ONLINE OFLINE</p>
      <div className="date flex justify-between align-center">
        <p className="colored">20 May</p>
        <p className="colored">19:00-22:00</p>
      </div>
    </Wrapper>
  );
}

export default ServiceTableRow;
const Wrapper = styled.div`
  padding: 22px 30px;
  &.fulled {
    background: var(--aqua-color);
  }
  & > p {
    font-size: 28px;
    color: #333333;
    font-weight: 500;
    line-height: 34px;
    @media (max-width: 1599px) {
        font-size: 24px;
    }
    @media (max-width: 767px) {
        font-size: 20px;
    }
  }
  .date {
    margin-top: 10px;
    width: 100%;
  }
`;
