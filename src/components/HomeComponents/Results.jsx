import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Result from "./Result";
import bg from "../../images/result-bg.png";

function Results() {
  const { t } = useTranslation();
  return (
    <Wrapper className="" style={{ backgroundImage: `url(${bg})` }}>
      <Result title={"45 000 000"} paragraph={t("main-readers")} />
      <Result title={"3 000 000"} paragraph={t("main-treated")} />
      <Result title={"357"} paragraph={t("main-millionaires")} />
      <Result title={"30"} paragraph={t("main-system")} />
      <Result title={"12"} paragraph={t("main-medicine")} />
      <Result title={"11"} paragraph={t("main-practice")} />
      <Result title={"6"} paragraph={t("main-grown")} />
    </Wrapper>
  );
}

export default Results;

const Wrapper = styled.div`
  padding: 45px 20px 32px;
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  /* grid-template-columns: max-content max-content 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: 2fr 1.8fr 1fr 1fr 1fr 1fr 1fr;
  background-size: cover;

  gap: 40px;
  @media (max-width: 767px) {
    background-image: none !important;
  }
  div:first-of-type {
    /* margin: 0 20px !important; */
    /* margin-right: 15px; */
  }
  div:nth-of-type(2) {
    /* margin: 0 25px !important; */
    /* margin-right: 40px !important; */
  }
  @media (max-width: 1199px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0;
    div {
      flex: 1 1 25% !important;
      margin: 24px 0;
      padding: 0 4px;
    }
  }
  @media (max-width: 767px) {
    div {
      flex: 1 1 calc(100%) !important;
      border-bottom: 1px solid #0002;
      margin: 0;
      padding: 24px 0;
      &:last-of-type {
        border-bottom: 0;
      }
      p {
        font-size: 18px !important;
        max-width: 90%;
        margin: 0 auto;
        margin-top: 16px;
      }
    }
  }
`;
