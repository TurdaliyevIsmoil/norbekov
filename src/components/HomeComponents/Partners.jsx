import React from "react";
import styled from "styled-components";
import rassiya1 from "../../images/rassiya1.png";
import p1 from "../../images/1.png";
import ctc from "../../images/ctc.png";
import tht from "../../images/tht.png";
import p4 from "../../images/4.png";
import mmp from "../../images/mmp.png";
import mk from "../../images/mk.png";
import ai from "../../images/ai.png";
import moskva from "../../images/moskva.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

function Partners() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="container flex align-center">
        <p>{t("partners-title")}:</p>
        <Swiper
          loop={true}
          slidesPerView={7}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <img src={rassiya1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ctc} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tht} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mmp} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mk} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ai} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={moskva} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
}

export default Partners;
const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #eaf0f2;
  p {
    flex: 0 0 170px;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    @media (max-width: 767px) {
      display: none;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
      margin-left: 0px;
      padding: 10px;
    }
    img {
      max-width: 100%;
    }
  }
`;
