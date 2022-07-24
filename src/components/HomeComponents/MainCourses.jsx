import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UseDataContext } from "../../store/contexts/DataContext";
import Button from "../../UI/Button";
import Devider from "../../UI/Devider";
import MainCoursesCard from "./MainCoursesCard";
import img1 from "../../images/perv-health.jpg";
import img2 from "../../images/second-health.jpg";
import img3 from "../../images/intuicia.jpg";
import img4 from "../../images/factory_of_success.jpg";
import img5 from "../../images/club_of_millioners.png";

function MainCourses() {
  const { t } = useTranslation();
  const lang = i18next.language;
  const navigate = useNavigate();
  return (
    <Wrapper className="flex column align-center">
      <h2>
        {t("main-courses-title")}{" "}
        <span className="absolute">{t("courses")}</span>{" "}
      </h2>
      <Devider half={true} />
      <main>
        <MainCoursesCard
          data={{
            title:
              lang === "uz"
                ? "Birinchi sog'lomlashtirish kursi"
                : "Первый оздоровительный курс",
            format: "allformat",
            img: img1,
            body:
              lang === "uz"
                ? "Birinchi salomatlik kuch, salomatlikni tiklang va yoshartirish jarayonini mustaqil ravishda boshlang."
                : "Восстановите силы, здоровье и самостоятельно запустите процесс омоложения. ",
          }}
        />
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6883 3V17.5M17.6883 32V17.5M17.6883 17.5H3H32"
            stroke="#29A5DA"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <MainCoursesCard
          data={{
            title:
              lang === "uz"
                ? "Ikkinchi sog'lomlashtirish kursi"
                : "Второй оздоровительный курс",
            format: "allformat",
            img: img2,
            body:
              lang === "uz"
                ? "Tuyg'ularni boshqarishni, kerakli xarakter xususiyatlarini rivojlantirishni va ichki kuchni ochib berishni o'rganing."
                : "Научитесь управлять эмоциями, развейте желаемые черты характера и раскройте внутреннюю силу. ",
          }}
        />
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6883 3V17.5M17.6883 32V17.5M17.6883 17.5H3H32"
            stroke="#29A5DA"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <MainCoursesCard
          data={{
            title: lang === "uz" ? "Intuitiv ta'lim" : "Тренировка интуиции",
            format: "allformat",
            img: img3,
            body:
              lang === "uz"
                ? "Intuitiv qobiliyatlarni uyg'otish, ijodiy fikrlashni o'rgatish va hodisalarni shakllantirishni o'rganing."
                : "Научитесь пробуждать интуитивные способности, тренировать творческое мышление и формировать события.",
          }}
        />
        <svg
          width="33"
          height="28"
          viewBox="0 0 33 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 14H30.5M30.5 14L19.5 3M30.5 14L19.5 25"
            stroke="#29A5DA"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <MainCoursesCard
          data={{
            title:
              lang === "uz" ? "Muvaffaqiyat ustaxonasi" : "Мастерская Успеха",
            format: "offsite",
            img: img4,
            body:
              lang === "uz"
                ? "Ruhingizning potentsialini oching va cheksiz imkoniyatlar yo'lida cheklangan e'tiqodlarni olib tashlang."
                : "Раскройте потенциал своего духа и снимите ограничивающие убеждения на пути к безграничным возможностям.",
          }}
        />
        <svg
          width="33"
          height="28"
          viewBox="0 0 33 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 14H30.5M30.5 14L19.5 3M30.5 14L19.5 25"
            stroke="#29A5DA"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <MainCoursesCard
          data={{
            title: lang === "uz" ? "Masterlar klubi" : "Master’s Club",
            format: "offsite",
            img: img5,
            body:
              lang === "uz"
                ? "O'zingizning orzuingizdagi biznesni yarating. Haqiqiy maqsadingizni tushuning va g'ayrioddiy hayot uchun potentsialingizni maksimal darajada oshiring."
                : "Создайте бизнес мечты. Поймите свое истинное предназначение и максимально реализуйте свой потенциал для выдающейся жизни.",
          }}
        />
      </main>
    </Wrapper>
  );
}

export default MainCourses;
const Wrapper = styled.div`
  padding-bottom: 100px;
  main {
    padding: 0 60px;
    display: grid;
    grid-template-columns: 1fr max-content 1fr max-content 1fr max-content 1fr max-content 1fr;
    grid-auto-rows: auto;
    @media (max-width: 1599px) {
      padding: 0 32px;
    }
    @media (max-width: 1199px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 1199px) {
      article {
        max-width: 500px;
      }
    }
    svg {
      max-width: 20px;
      margin: 0 5px;
      margin-top: auto;
      margin-bottom: auto;
      @media (max-width: 1199px) {
        margin: 10px auto;
        &:nth-of-type(3),
        &:nth-of-type(4) {
          transform: rotate(90deg);
        }
      }
    }
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      article {
        max-width: 420px;
      }
    }
  }
`;
