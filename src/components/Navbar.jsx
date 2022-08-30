import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.svg";
import MenuLinks from "../utils/MenuLinks";

import LanguageButtons from "./LanguageButtons";

function Navbar() {
  const { t } = useTranslation();
  const [mobile, setmobile] = useState(false);
  useEffect(() => {
    if (mobile) {
      document.getElementsByTagName("body")[0].classList.add("hidden");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("hidden");
    }
  }, [mobile]);
  return (
    <Container>
      <div className="container flex justify-between align-stretch">
        <div className="logo flex align-center">
          <img src={logo} alt="" />
        </div>
        <div
          className={`burger flex align-center ${mobile ? "active" : ""}`}
          onClick={() => setmobile(!mobile)}
        >
          <img src="https://img.icons8.com/ios-glyphs/60/000000/menu-rounded.png" />
        </div>
        <div className={`actions flex align-center ${mobile ? "active" : ""}`}>
          <menu
            className="flex align-stretch"
            onClick={() =>
              window.screen.width < 1200 ? setmobile(!mobile) : null
            }
          >
            {MenuLinks.map((i) => (
              <li>
                <NavLink to={i.path}>
                  <h5>{t(i.title)}</h5>
                </NavLink>
              </li>
            ))}
            <div className="closer">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
              >
                <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z" />
              </svg>
            </div>
          </menu>
          <LanguageButtons />
          <a href="#" className="telegram">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5562 20.2412L12.0269 27.6865C12.7842 27.6865 13.1122 27.3612 13.5056 26.9706L17.0562 23.5772L24.4136 28.9652C25.7629 29.7172 26.7136 29.3212 27.0776 27.7239L31.9069 5.09456L31.9082 5.09322C32.3362 3.09856 31.1869 2.31856 29.8722 2.80789L1.48557 13.6759C-0.451763 14.4279 -0.42243 15.5079 1.15624 15.9972L8.41357 18.2546L25.2709 7.70655C26.0642 7.18122 26.7856 7.47189 26.1922 7.99722L12.5562 20.2412Z"
                fill="#29A5DA"
              />
            </svg>
          </a>
          <a href="tel:998954767677" className="call flex align-center">
            <div className="icon flex align-center justify-center">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6746 12.6L17.1156 12.18C18.2076 11.046 18.0186 10.521 16.9476 9.45001L11.2356 3.675C9.5346 1.953 9.2196 1.134 7.6026 2.667L7.1616 3.087L16.6746 12.6ZM15.5616 13.545L6.3216 4.305C4.8516 6.279 1.4076 11.592 3.1086 15.519C4.6416 19.026 5.3976 19.194 7.3086 21.819C11.1936 26.25 16.0866 30.996 19.9086 34.566C22.5546 36.477 22.6596 37.359 26.2086 38.766C29.9886 40.257 35.4486 36.897 37.5066 35.49L28.2666 26.25L25.7886 29.652C25.0746 30.618 23.2686 29.526 22.0086 28.266C19.8246 26.061 15.3306 21.588 13.6086 19.719C12.3696 18.48 11.2566 16.674 12.2226 15.939L15.5616 13.545ZM38.7036 34.65L39.1446 34.209C40.5726 32.655 39.7536 32.319 38.0526 30.639L32.2986 24.927C31.2276 23.898 30.7236 23.667 29.6316 24.696L29.2116 25.137L38.7036 34.65Z"
                  fill="#29A5DA"
                />
              </svg>
            </div>
            <div className="flex column">
              <span className="colored">{t("call-now")}</span>
              <h3 className="colored">+998954767677</h3>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;

const Container = styled.nav`
  position: sticky;
  top: 0;
  overflow: visible !important;
  z-index: 99;
  height: 100px;
  align-items: stretch;
  justify-content: space-between;
  padding-top: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  @media (min-width: 1599px) {
    height: 120px;
  }
  @media (max-width: 767px) {
    height: 90px;
  }
  .container {
    position: relative;
    height: 100%;
  }
  .logo {
    img {
      width: 130px;
      @media (max-width: 1599px) {
        width: 100px;
      }
      @media (max-width: 767px) {
        width: 90px;
      }
    }
  }
  .burger {
    display: none;
    @media (max-width: 1199px) {
      display: flex;
      cursor: pointer;
      img {
        width: 40px;
      }
      &.active {
        opacity: 0;
      }
    }
  }
  .actions {
    @media (max-width: 1199px) {
      overflow: scroll;
      position: fixed;
      display: flex;
      flex-direction: column;
      left: -100%;
      top: 0;
      padding: 80px 20px 40px 40px;
      width: 270px;
      height: 100vh;
      background-color: #fff;
      align-items: flex-start;
      justify-content: flex-start;
      transition: all 0.3s;
      gap: 20px;
      @media (max-width: 360px) {
        width: 100%;
      }
      &::after {
        position: fixed;
        content: "";
        top: 0;
        right: 0;
        width: calc(100vw - 270px);
        right: -100%;
        height: 100%;
        transition: all 0.3s;
        background: #00000099;
        @media (max-width: 360px) {
          display: none;
        }
      }
      &.active {
        left: 0;
        &::after {
          right: 0;
        }
        .closer {
          display: block !important;
          @media (max-width: 360px) {
            svg {
              fill: black;
            }
          }
        }
      }
      & > div {
        margin-left: 0;
      }
      & > menu {
        height: auto !important;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-bottom: 60px !important;
        .closer {
          cursor: pointer;
          transition: all 0.3s;
          position: fixed;
          top: 32px;
          right: 15px;
          z-index: 999;
          svg {
            width: 40px;
            height: 40px;
            fill: white;
          }
        }
        a {
          padding-bottom: 10px;
          padding-top: 10px;
          box-sizing: content-box;
          &::after {
            display: none;
          }
        }
      }
      & > .lang {
        margin-top: auto;
      }
    }
    @media (max-width: 767px) {
      padding-top: 30px;
    }
    vertical-align: middle;
    & > menu {
      height: 100%;
      gap: 35px;
      @media (max-width: 1599px) {
        gap: 24px;
      }
      .closer {
        display: none;
      }
      li {
        a {
          color: var(--n7-color);
          display: block;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          opacity: 0.8;
          text-decoration: none;
          transition: all 0.3s ease;
          @media (max-width: 1599px) {
            h5 {
              font-size: 14px;
            }
          }
          &::after {
            position: absolute;
            border-radius: 10px;
            content: "";
            bottom: 0px;
            height: 3px;
            width: 90%;
            right: 5%;
            left: 5%;
            background-color: var(--main-color);
            transform: scale(0);
            transition: all 0.3s ease;
          }
          &:hover,
          &.active {
            opacity: 1;
            color: var(--main-color);
            &::after {
              transform: scale(1);
            }
          }
        }
      }
    }
  }
  .telegram {
    margin-left: 30px;
    margin-right: 30px;
    transition: all 0.3s;
    &:hover {
      opacity: 0.8;
    }
    @media (max-width: 1199px) {
      display: none;
    }
  }
  .call {
    text-decoration: none;
    gap: 14px;
    * {
      transition: all 0.3s;
    }
    &:hover {
      .icon {
        background-color: var(--main-color);
        svg path {
          fill: #fff;
        }
      }
    }
    .icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid #29a5da;
      @media (max-width: 1599px) {
        width: 60px;
        height: 60px;
        border-width: 1px;
        svg {
          width: 28px;
          height: 28px;
        }
      }
      @media (max-width: 1199px) {
        width: 40px;
        height: 40px;
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
    text-decoration-color: #29a5da;
    h3 {
      font-size: 27px;
      margin-top: 8px;
      @media (max-width: 1599px) {
        font-size: 24px;
      }
      @media (max-width: 1199px) {
        font-size: 20px;
        margin-top: 2px;
      }
    }
    span {
      text-decoration: underline;
      @media (max-width: 1599px) {
        font-size: 14px;
      }
      @media (max-width: 1199px) {
        font-size: 10px;
      }
    }
  }
`;
