import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import img from "../../images/success.png";
import Devider from "../../UI/Devider";

const Success = () => {
  const { t } = useTranslation();
  return (
    <Wrapper className="bg-linear">
      <Devider half />
      <div className="container">
        <h2>
          {t("home-success-title")}{" "}
          <span className="absolute">{t("success")}</span>
        </h2>
        <Devider half />
        <main className="flex justify-between align-center">
          <img src={img} alt="Success Norbekov" />
          <p dangerouslySetInnerHTML={{ __html: t("home-success-desc") }}></p>
        </main>
      </div>
      <Devider half />
    </Wrapper>
  );
};

export default Success;
const Wrapper = styled.div`
  h2 {
    margin: 0 auto;
    max-width: 1000px;
    span {
      color: rgba(41, 165, 218, 0.08);
    }
    @media (max-width: 767px) {
      font-size: 28px;
      line-height: 150%;
      span {
        font-size: 36px;
      }
    }
  }
  main {
    gap: 100px;
    @media (max-width: 992px) {
      gap: 40px !important;
      p {
        font-size: 18px;
      }
    }
    @media (max-width: 767px) {
      flex-direction: column;
    }
    & > * {
      flex: 0 0 calc(50% - 50px);
      @media (max-width: 992px) {
        flex: 0 0 calc(50% - 20px);
      }
      @media (max-width: 767px) {
        flex: 0 0 100%;
      }
    }
    img {
      width: 100%;
      max-width: 500px;
    }
  }
`;
