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
import t1 from "../../images/t1.jpg";
import t2 from "../../images/t2.jpg";
import t3 from "../../images/t3.jpg";
import t4 from "../../images/t4.jpg";
import t5 from "../../images/t5.jpg";
import t6 from "../../images/t6.jpg";

function Employers() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="container">
        <Devider half />
        <h2>
          {t("main-staff")} <span className="absolute">{t("specialists")}</span>{" "}
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
            <Employer img={t1} name="Alisher Obidov" />
          </SwiperSlide>
          <SwiperSlide>
            <Employer img={t2} name="Mahmadiyorova Nurjaxon" />
          </SwiperSlide>
          <SwiperSlide>
            <Employer img={t3} name="Zokirjon Tojiboyev" />
          </SwiperSlide>
          <SwiperSlide>
            <Employer img={t4} name="Shavkat Ibragimov" />
          </SwiperSlide>
          <SwiperSlide>
            <Employer img={t5} name="Mirzakarim Norbekov" />
          </SwiperSlide>
          <SwiperSlide>
            <Employer img={t6} name="Ahadjon Qo’shoqov" />
          </SwiperSlide>
        </Swiper>
        <Devider half />
      </div>
    </Wrapper>
  );
}

export default Employers;

const Wrapper = styled.div``;
