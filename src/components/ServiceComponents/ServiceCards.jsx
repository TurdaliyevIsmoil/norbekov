import React from "react";
import styled from "styled-components";
import ServiceCard from "../Cards/ServiceCard";

function ServiceCards({ data }) {
  return (
    <Wrapper className="container">
      {data.map((i) => (
        <ServiceCard data={i} />
      ))}
    </Wrapper>
  );
}

export default ServiceCards;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  grid-auto-rows: auto;
  @media (max-width: 1599px) {
    grid-gap: 30px;
  }
  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
