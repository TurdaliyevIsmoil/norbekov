import React from "react";
import styled from "styled-components";
import NewsCard from "../Cards/NewsCard";

function NewsCards({ data }) {
  return (
    <Wrapper className="container">
      {data.map((i) => (
        <NewsCard data={i} />
      ))}
    </Wrapper>
  );
}

export default NewsCards;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  grid-row-gap: 70px;
  grid-auto-rows: auto;
  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }
`;
