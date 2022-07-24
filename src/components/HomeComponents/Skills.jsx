import React from "react";
import styled from "styled-components";
import img from "../../images/opportunity.png";
import line from "../../images/line-shape.svg";
import Devider from "../../UI/Devider";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="">
        <h2>
          {t("main-opportunities-title")}{" "}
          <span className="absolute">{t("opportunities")}</span>
        </h2>
        <main className="flex align-center justify-center">
          <img src={img} alt="Opportunities" />

          <div className="content">
            <h3>{t("main-business-and-career")}</h3>
            <p>{t("main-business-and-career-description")}</p>
          </div>
          <div className="content">
            <h3>{t("main-health-and-strength")}</h3>
            <p>{t("main-health-and-strength-description")}</p>
          </div>
          <div className="content">
            <h3>{t("main-wealth-and-prosperity")}</h3>
            <p>{t("main-wealth-and-prosperity-description")}</p>
          </div>
          <div className="content">
            <h3>{t("main-family-and-relationships")}</h3>
            <p>{t("main-family-and-relationships-description")}</p>
          </div>
        </main>
      </div>
      <img src={line} alt="" className="shape" />
      <img src={line} alt="" className="shape" />
    </Wrapper>
  );
}

export default Skills;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  & > div {
    padding: 0 32px;
  }
  .shape {
    position: absolute;
    @media (max-width: 1199px) {
      display: none;
    }
    &:nth-of-type(1) {
      bottom: -30%;
      left: 0;
      transform: rotate(180deg);
    }
    &:nth-of-type(2) {
      top: -30%;
      right: 0;
    }
  }
  main {
    z-index: 2;
    position: relative;
    text-align: left;
    margin-top: 1rem;
    @media (max-width: 1199px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
    img:first-child {
      width: 55%;
      @media (max-width: 1599px) {
        width: 45%;
      }
      @media (max-width: 1199px) {
        display: none;
      }
    }
    .content {
      max-width: 28%;
      width: fit-content;
      position: absolute;

      @media (max-width: 1199px) {
        padding: 40px 20px;
        position: relative;
        max-width: 100%;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        height: 100%;
        width: 100%;
        max-width: 100% !important;
      }
      @media (max-width: 767px) {
        border: 0px !important;
        border-bottom: 1px solid #0002 !important;
        padding: 32px 10px !important;
      }
      p {
        width: fit-content;
      }
      * {
        color: var(--dark-main-color);
      }
      p {
        margin-top: 12px;
        font-size: 24px;
        font-family: "Playfair Display";
        @media (max-width: 1439px) {
          font-size: 22px;
        }
      }
      h3 {
        font-size: 36px;
        font-weight: medium;
        @media (max-width: 767px) {
          font-size: 24px;
        }
      }
      &:nth-of-type(1) {
        top: 100px;
        right: 67%;
        width: fit-content;
        @media (max-width: 1599px) {
          bottom: 73%;
          top: auto;
        }
        @media (max-width: 1439px) {
          bottom: 70%;
        }
      }
      &:nth-of-type(2) {
        top: 100px;
        left: 72%;
        @media (max-width: 1599px) {
          bottom: 73%;
          top: auto;
        }
        @media (max-width: 1439px) {
          bottom: 70%;
        }
        @media (max-width: 1199px) {
          padding-left: 40px;
          border-left: 1px solid #0002;
        }
      }
      &:nth-of-type(3) {
        bottom: 100px;
        right: 67%;
        @media (max-width: 1599px) {
          bottom: 8%;
        }
        @media (max-width: 1439px) {
          bottom: auto;
          top: 70%;
        }
        @media (max-width: 1199px) {
          border-top: 1px solid #0002;
        }
      }
      &:nth-of-type(4) {
        bottom: 100px;
        right: 10px;
        @media (max-width: 1599px) {
          bottom: 10%;
          max-width: 28%;
        }
        @media (max-width: 1439px) {
          bottom: auto;
          top: 70%;
        }
        @media (max-width: 1199px) {
          padding-left: 40px;
          border-left: 1px solid #0002;
          border-top: 1px solid #0002;
        }
      }
    }
  }
`;
