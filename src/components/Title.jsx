import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Title({ title, small = false, path = "/" }) {
  const { t } = useTranslation();
  return (
    <Wrapper className="container flex justify-between">
      <div className="flex align-center">
        <p>{t("main")}</p>
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1L9.5 9L1.5 17"
            stroke="#555555"
            stroke-opacity="0.62"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <p>{title}</p>
      </div>
      <NavLink to={`${path}`} className="flex align-center">
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="26.5"
            cy="26.5"
            r="25.5"
            stroke="#29A5DA"
            stroke-width="2"
          />
          <path
            d="M29.15 18.5498L20.3167 26.4998L29.15 34.4498"
            stroke="#29A5DA"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        {t("back")}
      </NavLink>
    </Wrapper>
  );
}

export default Title;
const Wrapper = styled.div`
  @media (max-width: 1023px) {
    flex-direction: column-reverse !important;
    gap: 24px;
    p {
      font-size: 16px !important;
    }
  }
  .flex {
    gap: 15px;

    * {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 140%;
      color: #333333;
    }
  }
`;
