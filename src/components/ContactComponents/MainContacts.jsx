import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Devider from "../../UI/Devider";

function MainContacts() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Devider />
      <div className="container flex align-start justify-between">
        <article className="flex column align-center">
          <div className="icon flex align-center justify-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.5768 41.6667C21.8039 41.6917 8.31428 28.0417 8.33303 10.4229C8.33303 9.27084 9.26636 8.33334 10.4164 8.33334H15.9164C16.9476 8.33334 17.8247 9.09168 17.9768 10.1125C18.3395 12.5605 19.0516 14.9439 20.0914 17.1896L20.3059 17.6521C20.4501 17.9633 20.4811 18.3151 20.3936 18.6467C20.3061 18.9784 20.1057 19.2691 19.8268 19.4688C18.1226 20.6854 17.4726 23.1333 18.7997 25.0417C20.4705 27.4444 22.5558 29.5305 24.958 31.2021C26.8684 32.5271 29.3164 31.8771 30.5309 30.175C30.7304 29.8953 31.0213 29.6941 31.3535 29.6062C31.6856 29.5183 32.038 29.5493 32.3497 29.6938L32.8101 29.9063C35.0559 30.9479 37.4393 31.6604 39.8872 32.0229C40.908 32.175 41.6664 33.0521 41.6664 34.0854V39.5833C41.6664 39.8571 41.6124 40.1282 41.5076 40.3811C41.4028 40.634 41.2491 40.8637 41.0554 41.0572C40.8618 41.2507 40.6318 41.4041 40.3788 41.5087C40.1258 41.6133 39.8547 41.667 39.5809 41.6667H39.5768Z"
                fill="white"
              />
            </svg>
          </div>
          <h3>{t("contact-phone")}</h3>
          <a href={`tel:998954767677`} className="colored">
            <h3>+998954767677</h3>
          </a>
        </article>
        <article className="flex column align-center">
          <div className="icon flex align-center justify-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 18.4325V36.25C45 37.9076 44.3415 39.4973 43.1694 40.6694C41.9973 41.8415 40.4076 42.5 38.75 42.5H11.25C9.5924 42.5 8.00269 41.8415 6.83058 40.6694C5.65848 39.4973 5 37.9076 5 36.25V18.4325L24.365 29.8275C24.5574 29.941 24.7767 30.0008 25 30.0008C25.2233 30.0008 25.4426 29.941 25.635 29.8275L45 18.4325ZM38.75 10C40.2879 9.99976 41.7718 10.5665 42.918 11.5918C44.0642 12.6172 44.7921 14.0291 44.9625 15.5575L25 27.3L5.0375 15.5575C5.2079 14.0291 5.93581 12.6172 7.08199 11.5918C8.22816 10.5665 9.71213 9.99976 11.25 10H38.75Z"
                fill="white"
              />
            </svg>
          </div>
          <h3>{t("contact-mail")}</h3>
          <a href={`mailto:${t("information-mail")}`} className="colored">
            <h3>{t("information-mail")}</h3>
          </a>
        </article>
        <article className="flex column align-center">
          <div className="icon flex align-center justify-center">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 46C10.2961 46 0 35.7039 0 23C0 10.2961 10.2961 0 23 0C35.7039 0 46 10.2961 46 23C46 35.7039 35.7039 46 23 46ZM20.8438 23C20.8438 23.7188 21.2031 24.3926 21.8051 24.716L30.4301 30.466C31.4184 31.2027 32.757 30.9332 33.341 29.9449C34.0777 28.9566 33.8082 27.618 32.8199 26.9531L25.1562 21.85V10.7812C25.1562 9.58633 24.1949 8.625 22.9191 8.625C21.8051 8.625 20.7629 9.58633 20.7629 10.7812L20.8438 23Z"
                fill="white"
              />
            </svg>
          </div>
          <h3>{t("contact-time")}</h3>
          <a href="mailto:info.norbekov@gmail.uz" className="colored">
            <h3>{t("information-working-time")}</h3>
          </a>
        </article>
        <article className="flex column align-center">
          <div className="icon flex align-center justify-center">
            <svg
              width="32"
              height="43"
              viewBox="0 0 32 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_42_1338)">
                <path
                  d="M14.025 41.8213C9.675 36.4428 0 23.4072 0 16.0851C0 7.20144 7.16333 0 16 0C24.8333 0 32 7.20144 32 16.0851C32 23.4072 22.25 36.4428 17.975 41.8213C16.95 43.1031 15.05 43.1031 14.025 41.8213ZM16 21.4468C18.9417 21.4468 21.3333 19.0424 21.3333 16.0851C21.3333 13.1278 18.9417 10.7234 16 10.7234C13.0583 10.7234 10.6667 13.1278 10.6667 16.0851C10.6667 19.0424 13.0583 21.4468 16 21.4468Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_42_1338">
                  <rect width="32" height="42.8936" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3>{t("location")}</h3>
          <a href="https://goo.gl/maps/3HDEo8YmpudYA7r88" className="colored">
            <h3>{t("information-contact-location")}</h3>
          </a>
        </article>
      </div>
      <Devider />
    </Wrapper>
  );
}

export default MainContacts;
const Wrapper = styled.div`
  background: var(--aqua-color);
  text-align: center;
  @media (max-width: 1023px) {
    .container {
      flex-wrap: wrap;

      article {
        flex: 0 0 50%;
        margin-bottom: 70px !important;
        padding: 30px;
        &:last-of-type,
        &:nth-of-type(3) {
          margin-bottom: 0 !important;
        }
      }
    }
  }

  article {
    @media (max-width: 1599px) {
      gap: 30px;
      a h3 {
        font-size: 24px;
      }
    }
    @media (max-width: 767px) {
      flex: 0 0 100% !important;
      max-width: 400px;
      margin: 0 auto;
      margin-bottom: 20px !important;
    }

    gap: 50px;
    flex: 0 0 25%;
    .icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: var(--main-color);
    }
    a h3 {
      font-weight: normal;
    }
  }
`;
