import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function AboutUs() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Wrapper className="bg-linear">
      <div className="container">
        <div className="video flex column justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GiKFpEEs6Zg?modestbranding=1&autohide=1&showinfo=0&showinfo=0&rel=0&amp;fs=0&amp;showinfo=0"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2 className="playfair n4">Mirzakarim Sanakulovich Norbekov</h2>
        </div>
        <div className="content flex column justify-center align-start">
          <h2>{t("main-about-us")}</h2>
          <p>{t("main-about-us-description")}</p>
          {/* <div style={{ gap: "28px" }} className="flex buttons">
            <Button darkHover onClick={() => navigate("/contacts")}>
              <h5> {t("more")}</h5>
              <svg
                width="32"
                height="19"
                viewBox="0 0 32 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5096 1.90866C19.2908 2.12744 19.168 2.42414 19.168 2.73349C19.168 3.04285 19.2908 3.33955 19.5096 3.55833L25.2846 9.33333L19.5096 15.1083C19.297 15.3284 19.1794 15.6231 19.1821 15.929C19.1848 16.2349 19.3075 16.5275 19.5238 16.7438C19.7401 16.9601 20.0327 17.0828 20.3386 17.0854C20.6445 17.0881 20.9392 16.9705 21.1592 16.758L27.759 10.1582C27.9778 9.93938 28.1006 9.64269 28.1006 9.33333C28.1006 9.02397 27.9778 8.72728 27.759 8.5085L21.1592 1.90866C20.9404 1.68995 20.6437 1.56708 20.3344 1.56708C20.025 1.56708 19.7283 1.68995 19.5096 1.90866Z"
                  fill="#29a5da"
                />
                <rect
                  y="8"
                  width="25.7778"
                  height="2.66667"
                  rx="1.33333"
                  fill="#29a5da"
                />
              </svg>
            </Button>
            <Button darkHover onClick={() => navigate("/contacts")}>
              <h5> {t("contacts")}</h5>
              <svg
                width="32"
                height="19"
                viewBox="0 0 32 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5096 1.90866C19.2908 2.12744 19.168 2.42414 19.168 2.73349C19.168 3.04285 19.2908 3.33955 19.5096 3.55833L25.2846 9.33333L19.5096 15.1083C19.297 15.3284 19.1794 15.6231 19.1821 15.929C19.1848 16.2349 19.3075 16.5275 19.5238 16.7438C19.7401 16.9601 20.0327 17.0828 20.3386 17.0854C20.6445 17.0881 20.9392 16.9705 21.1592 16.758L27.759 10.1582C27.9778 9.93938 28.1006 9.64269 28.1006 9.33333C28.1006 9.02397 27.9778 8.72728 27.759 8.5085L21.1592 1.90866C20.9404 1.68995 20.6437 1.56708 20.3344 1.56708C20.025 1.56708 19.7283 1.68995 19.5096 1.90866Z"
                  fill="white"
                />
                <rect
                  y="8"
                  width="25.7778"
                  height="2.66667"
                  rx="1.33333"
                  fill="white"
                />
              </svg>
            </Button>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  position: relative;
  padding-top: 80px;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      grid-gap: 24px;
    }
    @media (max-width: 767px) {
      grid-gap: 0;
      .video {
        padding-bottom: 30px !important;
      }
      button {
        width: 100%;
      }
      .buttons {
        width: 100%;
        flex-direction: column;
        gap: 14px !important;
        align-items: stretch;
        button {
          width: 100% !important;
        }
      }
    }
    .buttons {
      button:first-child {
        background: #fff !important;
        color: #29a5da;
      }
    }
    h2 {
      text-align: left;
    }
    .video {
      padding-bottom: 50px;
      * {
        position: relative;
        z-index: 2;
      }
      &::after {
        position: absolute;
        width: 43%;
        z-index: 1;
        height: 50%;
        /* content: ""; */
        background: var(--main-color);
        left: 0;
        bottom: 0;
        @media (max-width: 1023px) {
          display: none;
        }
      }
      iframe {
        border-top-right-radius: 80px;
        width: 100%;
        height: auto;
        aspect-ratio: 16/10;
        @media (max-width: 767px) {
          border-top-right-radius: 0;
        }
      }
      h2 {
        font-size: 42px;
        margin-top: 25px;
        /* color: white; */
        max-width: 80%;
        @media (max-width: 1599px) {
          font-size: 36px;
        }
        @media (max-width: 1023px) {
          display: none;
        }
      }
    }
    .content {
      padding-bottom: 40px;
      p {
        font-weight: 500;
        color: var(--n6-color);
        margin-top: 30px;
        margin-bottom: 50px;
        @media (max-width: 1199px) {
          font-size: 16px;
        }
        @media (max-width: 767px) {
          margin-top: 18px;
          margin-bottom: 24px;
        }
      }
    }
  }
`;
