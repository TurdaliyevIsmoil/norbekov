import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink, useNavigate } from "react-router-dom";
import { UseDataContext } from "../../store/contexts/DataContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Loading from "../Loading";

function Header() {
  const [custom_swiper, set_swiper] = useState({});
  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const { tables, fetchTables } = UseDataContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lang = i18next.language;
  useEffect(() => {
    if (tables?.length === 0) {
      fetchTables();
    }
  }, [tables]);
  return (
    <Wrapper>
      <Loading load={tables.length === 0} />
      <Swiper
        effect="fade"
        modules={[EffectFade, Navigation, Pagination, Scrollbar]}
        loop={true}
        slidesPerView={1}
        onInit={(ev) => {
          set_swiper(ev);
        }}
        pagination={{
          // clickable: true,
          type: "progressbar",
          renderProgressbar: function (index, className) {
            return '<span class="swiper-pagination-progress swiper-pagination-progressbar-fill"></span>';
          },
        }}
      >
        {tables.slice(0, 3).map((i) => (
          <SwiperSlide>
            <SlideItem
              className="flex align-end"
              style={{
                backgroundImage: `url(https://${i.post_img_path})`,
              }}
            >
              <div className="container flex justify-between align-end">
                <NavLink to={`/tables/${i.id}`}>
                  {/* <h1>{lang === "uz" ? i.post_title : i.post_title_ru}</h1> */}
                </NavLink>
                <div className="arrows flex">
                  <div
                    onClick={nextSlide}
                    className="review-swiper-button-prev flex align-center justify-center"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0144 4.37436C20.178 4.5418 20.2695 4.76656 20.2695 5.00061C20.2695 5.23466 20.178 5.45943 20.0144 5.62686L10.8776 15L20.0144 24.3712C20.178 24.5387 20.2695 24.7634 20.2695 24.9975C20.2695 25.2315 20.178 25.4563 20.0144 25.6237C19.9349 25.7054 19.8399 25.7703 19.7349 25.8146C19.6299 25.8589 19.5171 25.8817 19.4032 25.8817C19.2892 25.8817 19.1764 25.8589 19.0715 25.8146C18.9665 25.7703 18.8714 25.7054 18.7919 25.6237L9.07568 15.6544C8.90503 15.4793 8.80952 15.2445 8.80952 15C8.80952 14.7555 8.90503 14.5207 9.07568 14.3456L18.7919 4.37624C18.8714 4.29459 18.9665 4.2297 19.0715 4.18539C19.1764 4.14108 19.2892 4.11826 19.4032 4.11826C19.5171 4.11826 19.6299 4.14108 19.7349 4.18539C19.8399 4.2297 19.9349 4.29459 20.0144 4.37624V4.37436Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div
                    onClick={nextSlide}
                    className="review-swiper-button-next flex align-center justify-center"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0144 4.37436C20.178 4.5418 20.2695 4.76656 20.2695 5.00061C20.2695 5.23466 20.178 5.45943 20.0144 5.62686L10.8776 15L20.0144 24.3712C20.178 24.5387 20.2695 24.7634 20.2695 24.9975C20.2695 25.2315 20.178 25.4563 20.0144 25.6237C19.9349 25.7054 19.8399 25.7703 19.7349 25.8146C19.6299 25.8589 19.5171 25.8817 19.4032 25.8817C19.2892 25.8817 19.1764 25.8589 19.0715 25.8146C18.9665 25.7703 18.8714 25.7054 18.7919 25.6237L9.07568 15.6544C8.90503 15.4793 8.80952 15.2445 8.80952 15C8.80952 14.7555 8.90503 14.5207 9.07568 14.3456L18.7919 4.37624C18.8714 4.29459 18.9665 4.2297 19.0715 4.18539C19.1764 4.14108 19.2892 4.11826 19.4032 4.11826C19.5171 4.11826 19.6299 4.14108 19.7349 4.18539C19.8399 4.2297 19.9349 4.29459 20.0144 4.37624V4.37436Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  .swiper-pagination.swiper-pagination-progressbar.swiper-pagination-horizontal {
    z-index: 99;
    height: 3px !important;
    top: auto;
    bottom: 0;
  }
  .swiper-pagination-progress {
    display: none;
    height: 5px;
    display: flex;
    background: white none repeat scroll 0% 0%;
  }
`;
const SlideItem = styled.div`
  min-height: 500px;
  background-size: cover !important;
  background-position: center !important;
  @media (max-width: 767px) {
    min-height: 100%;
    position: relative;
    height: 100%;
    aspect-ratio: 16 / 9;
  }
  .container {
    width: 100%;
    padding-bottom: 30px;
    @media (max-width: 767px) {
      flex-direction: column !important;
      align-items: center;
      text-align: center;
      gap: 48px;
      padding-bottom: 20px;
    }
  }
  * {
    z-index: 1;
  }
  h1 {
    color: white;
    max-width: 50%;
    @media (max-width: 767px) {
      max-width: 400px;
      word-wrap: anywhere;
      text-align: center;
    }
  }
  .arrows {
    gap: 5px;
    @media (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }
    div {
      border: 2px solid #ffffff;
      width: 60px;
      height: 60px;
      cursor: pointer;
      transition: all 0.3s;
      @media (max-width: 767px) {
        width: 30px;
        height: 30px;
        border: 0;
        svg {
          width: 70%;
        }
      }
      &:hover {
        background-color: #fff;
        svg path {
          fill: var(--n6-color);
        }
      }
    }
    div:last-child {
      transform: rotate(180deg);
    }
  }

  &::before {
    content: "";
    z-index: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40.94%,
      rgba(0, 0, 0, 0.8) 100%
    );
    @media (max-width: 767px) {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 30.94%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
  }
`;
