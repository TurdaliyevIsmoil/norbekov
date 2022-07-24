import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import img from "../../images/omil.png";

function Factor() {
  const [tab, settab] = useState("tana");
  const { t } = useTranslation();
  const lang = i18next.language;
  return (
    <Wrapper>
      <div className="container flex align-center">
        <main>
          <h2>
            {t("home-factor-title")} <span className="absolute">{t('factor')}</span>{" "}
          </h2>
          <p>{t("home-factor-desc")}</p>
          <div className="tabs">
            <div className="menu flex justify-around">
              <h3
                onClick={() => settab("tana")}
                className={`${tab === "tana" ? "active" : ""}`}
              >
                {t("body")}
              </h3>
              <h3
                onClick={() => settab("ong")}
                className={`${tab === "ong" ? "active" : ""}`}
              >
                {t("mind")}
              </h3>
              <h3
                onClick={() => settab("jon")}
                className={`${tab === "jon" ? "active" : ""}`}
              >
                {t("soul")}
              </h3>
              <h3
                onClick={() => settab("ruh")}
                className={`${tab === "ruh" ? "active" : ""}`}
              >
                {t("spirit")}
              </h3>
            </div>
            <div className="content">
              {tab === "ruh" &&
                (lang === "uz" ? (
                  <ul>
                    <li>Iroda</li>
                    <li>Aniqlash</li>
                    <li>Konsentratsiya</li>
                    <li>Doimiylik</li>
                    <li>Sabr-toqat</li>
                  </ul>
                ) : (
                  <ul>
                    <li>Сила воли</li>
                    <li>Решимость</li>
                    <li>Концентрация внимания</li>
                    <li>Упорство</li>
                    <li>Настойчивость</li>
                  </ul>
                ))}
              {tab === "tana" &&
                (lang === "uz" ? (
                  <ul>
                    <li>Salomatlik</li>
                    <li>Jismoniy sezgilar</li>
                    <li>Energiya</li>
                    <li>Ohang</li>
                    <li>Ishonch</li>
                  </ul>
                ) : (
                  <ul>
                    <li>Здоровье</li>
                    <li>Физические ощущения</li>
                    <li>Энергия</li>
                    <li>Тонус</li>
                    <li>Уверенность</li>
                  </ul>
                ))}
              {tab === "ong" &&
                (lang === "uz" ? (
                  <ul>
                    <li>Bilim</li>
                    <li>Xotira</li>
                    <li>Intellektual qobiliyat</li>
                  </ul>
                ) : (
                  <ul>
                    <li>Знания</li>
                    <li>Память</li>
                    <li>Интеллектуальные способности</li>
                  </ul>
                ))}
              {tab === "jon" &&
                (lang === "uz" ? (
                  <ul>
                    <li>Thislar</li>
                    <li>Fikrlar</li>
                    <li>Kayfiyat</li>
                    <li>Sezgi</li>
                    <li>Ijodkorlik</li>
                    <li>Sevgi</li>
                  </ul>
                ) : (
                  <ul>
                    <li>Эмоции</li>
                    <li>Мысли</li>
                    <li>Настроение</li>
                    <li>Интуиция</li>
                    <li>Творчество</li>
                    <li>Любовь</li>
                  </ul>
                ))}
            </div>
          </div>
        </main>
        <img src={img} alt="Factor Norbekov" />
      </div>
    </Wrapper>
  );
}

export default Factor;
const Wrapper = styled.div`
  & > div {
    gap: 60px;
    @media (max-width: 1199px) {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
    h2 {
      text-align: left;
      font-size: 56px;
      @media (max-width: 767px) {
        font-size: 32px;
      }
    }
    p {
      margin-top: 60px;
      font-size: 24px;
      @media (max-width: 767px) {
        font-size: 18px;
        margin-top: 30px;
      }
    }
    .content {
      margin-top: 30px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          padding-left: 30px;
          flex: 0 0 50%;
          margin-bottom: 20px;
          font-family: "Gilroy";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 150%;
          @media (max-width: 1199px) {
            flex: 0 0 100%;
          }
          @media (max-width: 767px) {
            font-size: 20px;
          }
          &::before {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            content: "";
            margin-left: -10px;
            margin-right: 17px;
            display: inline-block;
            margin-bottom: 5px;
            background-color: var(--main-color);
          }
        }
      }
    }
    & > * {
      flex: 0 0 calc(50% - 30px);
      width: 100%;
      @media (max-width: 1199px) {
        flex: 0 0 100%;
      }
    }

    .tabs {
      .menu {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top: 60px;
        padding-bottom: 10px;
        border-bottom: 1px solid #c4c4c4;
        h3 {
          text-align: center;
          font-weight: 500;
          font-size: 28px;
          color: #555;
          border-right: 1px solid var(--main-color);
          padding: 4px 0;
          transition: all 0.3s;
          text-transform: capitalize;
          @media (max-width: 767px) {
            font-size: 20px;
          }
          &:last-of-type {
            border-right: 0px;
          }
          &:hover,
          &.active {
            cursor: pointer;
            color: var(--main-color);
          }
        }
      }
    }
  }
`;
