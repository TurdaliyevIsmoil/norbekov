import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Employer() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <img
        src="https://d15-a.sdn.cz/d_15/c_img_F_G/9E1BZbu.jpeg?fl=cro,0,98,800,450%7Cres,1200,,1%7Cwebp,75"
        alt=""
      />
      <div className="content">
        <p>Psixolog</p>
        <h3 className="playfair">Mirzakarim Norbekov</h3>
      </div>
      <div className="flex justify-between">
        <strong className="colored">16 {t("experience")}</strong>
        <div className="arrow flex align-center justify-center">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.67742 1L12 6.32258L6.67742 11.6452"
              stroke="white"
              stroke-opacity="0.84"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L6.32258 6.32258L1 11.6452"
              stroke="white"
              stroke-opacity="0.84"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </Wrapper>
  );
}

export default Employer;

const Wrapper = styled.div`
  background: linear-gradient(
    107.97deg,
    rgba(41, 165, 218, 0.14) 5.43%,
    rgba(41, 165, 218, 0.12) 56.87%,
    rgba(41, 165, 218, 0.11) 100.3%
  );
  border-radius: 22px;
  padding: 12px 12px 17px;
  img {
    width: 100%;
    aspect-ratio: 16/10;
    object-fit: cover;
    border-radius: 14px;
  }
  .arrow {
    width: 29px;
    height: 29px;
    background: linear-gradient(
      101.95deg,
      rgba(18, 169, 233, 0.6) 6.12%,
      #29a5da 52.44%,
      rgba(41, 165, 218, 0.69) 90.86%
    );
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.16);
    border-radius: 5px;
  }
  .content {
    padding-left: 14px;
    border-left: 2px solid #29a5da;
    margin: 16px 0;
  }
  h3 {
    color: var(--n3-color);
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    text-transform: capitalize;
    color: #333333;
    @media (max-width: 1599px) {
      font-size: 20px;
    }
    @media (max-width: 1199px) {
      font-size: 18px;
    }
  }
`;
