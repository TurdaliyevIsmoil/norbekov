import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import bg from "../../images/description.png";

function Oppontunity() {
  const { t } = useTranslation();
  return (
    <Wrapper
      style={{ backgroundImage: `url(${bg})` }}
      className={"flex column align-center justify-center"}
    >
      <div className="container flex column align-center">
        <h3>{t("main-description-title")}</h3>
        <p>{t("main-description-paragraph")}</p>
        <svg
          width="48"
          height="46"
          viewBox="0 0 48 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L24 24L46 2"
            stroke="white"
            stroke-opacity="0.84"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 22L24 44L46 22"
            stroke="white"
            stroke-opacity="0.84"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </Wrapper>
  );
}

export default Oppontunity;

const Wrapper = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  max-height: 660px;
  @media (max-width: 1023px) {
    min-height: auto;
    padding-top: 80px;
    padding-bottom: 80px;
    max-width: auto;
  }
  @media (max-width: 767px) {
    padding-top: 48px;
    padding-bottom: 48px;
    svg {
      display: none;
    }
  }
  h3 {
    font-size: 30px;
    line-height: 180%;
    text-align: center;
    letter-spacing: 0.02em;
    @media (max-width: 1023px) {
      font-size: 24px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 150%;
    }
  }
  p {
    font-size: 28px;
    max-width: 70%;
    text-align: center;
    @media (max-width: 1023px) {
      font-size: 20px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 150%;
      max-width: 100%;
    }
  }
  .container {
    gap: 50px;
    padding-top: 54px;
    padding-bottom: 54px;
  }
  * {
    color: white;
    z-index: 2;
    position: relative;
  }
`;
