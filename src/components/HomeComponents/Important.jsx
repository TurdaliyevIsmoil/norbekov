import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import img from "../../images/important.png";
import body from "../../images/body.png";
import mind from "../../images/mind.png";
import soul from "../../images/soul.png";
import spirit from "../../images/spirit.png";
import Devider from "../../UI/Devider";
import MainCoursesCard from "./MainCoursesCard";

function Important() {
  const { t } = useTranslation();
  const lang = i18next.language;
  return (
    <Wrapper className="bg-linear">
      <Devider half />
      <div className="container">
        <h2>
          {t("home-balance-title")}
          <span className="absolute">{t("balance")}</span>
        </h2>
        <Devider half />
        <main className="flex">
          <p dangerouslySetInnerHTML={{ __html: t("home-balance-desc") }}></p>
          <img src={img} alt="" />
        </main>
        <Devider half />
        <div className="cards">
          <MainCoursesCard
            data={{
              title:
                lang === "uz" ? "Tananing ustunligi" : "Превосходство Тела",
              format: "allformat",
              img: body,
              body:
                lang === "uz"
                  ? "Inson o'z ehtiyojlari bilan hayvonga o'xshaydi. Hayot haqidagi bilim to'xtasa, ruh susayadi."
                  : "Человек становится похожим на животное со свойственными ему потребностями. Дух чахнет, когда прекращается познание жизни. ",
            }}
          />
          <MainCoursesCard
            data={{
              title:
                lang === "uz" ? "Aqlning Ustunligi" : "Превосходство Разума",
              format: "allformat",
              img: mind,
              body:
                lang === "uz"
                  ? "Hayot sovuq hisob-kitoblarga qurilgan, Ruh vayron bo'lgan, Ruh ezilgan. Inson tasavvursiz kompyuter yoki hisoblash mashinasiga aylanadi va sevgi. Bu konservatorlarning standarti."
                  : "Жизнь строится на холодном расчете, уничтожается Душа, угнетается Дух. Человек становится подобием компьютера или счетной машинки, без воображения и любви. Это эталон консерваторов. ",
            }}
          />
          <MainCoursesCard
            data={{
              title: lang === "uz" ? "Jonning Ustunligi" : "Превосходство Души",
              format: "allformat",
              img: soul,
              body:
                lang === "uz"
                  ? "Agar Ruh o'z zimmasiga olsa, u holda odam faqat bulutlarda aylanib yurgan his-tuyg'ular va xayollar bilan yashaydi. Unda o'zini himoya qilish instinkti yo'q."
                  : "Если Душа берет верх, то человек живет лишь эмоциями и фантазиями, витает в облаках. У него отсутствует инстинкт самосохранения.",
            }}
          />
          <MainCoursesCard
            data={{
              title: lang === "uz" ? "Ruhning Ustunligi" : "Превосходство Духа",
              format: "allformat",
              img: spirit,
              body:
                lang === "uz"
                  ? "Ruh faqat uch kuchning uyg'unligi va birligida namoyon bo'ladi. Agar tana tartibsiz bo'lsa, qanday qilib ruhiy rivojlanishi mumkin? Hissiy va ruhiy kayfiyat jismoniy holatga bog'liq."
                  : "Дух проявляется только в гармонии и единстве трех сил. Как можно развиваться духовно, если не в порядке тело? От физического состояния зависит эмоциональный и духовный настрой. ",
            }}
          />
        </div>
        <Devider half />
      </div>
    </Wrapper>
  );
}

export default Important;

const Wrapper = styled.div`
  main {
    gap: 70px;
    @media (max-width: 992px) {
      flex-direction: column-reverse;
    }
    img {
      width: 100%;
      flex: 0 0 50%;
    }
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    & > div {
      padding-bottom: 10px;
    }
    button {
      display: none;
    }
    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
`;
