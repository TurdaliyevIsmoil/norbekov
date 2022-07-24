import React from "react";
import styled from "styled-components";
import CourseCard from "../Cards/CourseCard";
import { UseDataContext } from "../../store/contexts/DataContext";

function TablesCards({ tables }) {
  return (
    <Wrapper className="container">
      {tables.map((i) => (
        <CourseCard data={i} />
      ))}
    </Wrapper>
  );
}

export default TablesCards;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  grid-auto-rows: auto;
  & > div {
    height: 100%;
  }
  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content !important;
  }
`;
