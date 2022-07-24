import React from "react";
import styled from "styled-components";
import Employer from "./Employer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Devider from "../../UI/Devider";
import { useTranslation } from "react-i18next";

function Employers() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="container">
        <Devider half />
        <h2>
          {t("main-staff")} <span className="absolute">{t('specialists')}</span>{" "}
        </h2>
        <Devider half />
        <Swiper
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            420: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            autoplay: true,
          }}
          loop={true}
        >
          <SwiperSlide>
            <Employer />
          </SwiperSlide>
          <SwiperSlide>
            <Employer />
          </SwiperSlide>
          <SwiperSlide>
            <Employer />
          </SwiperSlide>
          <SwiperSlide>
            <Employer />
          </SwiperSlide>
          <SwiperSlide>
            <Employer />
          </SwiperSlide>
          <SwiperSlide>
            <Employer />
          </SwiperSlide>
          <SwiperSlide>
            <Employer />
          </SwiperSlide>
        </Swiper>
        <Devider half />
      </div>
    </Wrapper>
  );
}

export default Employers;

const Wrapper = styled.div``;
