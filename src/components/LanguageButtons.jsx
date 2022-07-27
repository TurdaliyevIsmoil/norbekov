import React, { useEffect, useState } from "react";
import uz from "../images/uz.png";
import ru from "../images/ru.png";
import down from "../images/down.svg";
import styled from "styled-components";
import i18next from "i18next";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function LanguageButtons() {
  const [language, setlanguage] = useState(getCookie("i18next"));
  const [menu, setmenu] = useState(false);
  const [langImg, setlangImg] = useState(
    language === "uz" ? uz : language === "ru" ? ru : uz
  );
  const [langText, setlangText] = useState(
    language === "uz" ? "UZB" : language === "ru" ? "RUS" : "UZB"
  );
  
  console.log(language)
  useEffect(() => {
    setlangText(() =>
      language === "uz" ? "UZB" : language === "ru" ? "RUS" : "UZB"
    );
    setlangImg(() => (language === "uz" ? uz : language === "ru" ? ru : uz));
  }, [i18next.language]);

  const clickedLang = (type) => {
    setlanguage(type);
    setmenu(false);
    i18next.changeLanguage(type);
  };
  return (
    <Container className="lang flex align-center">
      <button className="flex align-center" onClick={() => setmenu(!menu)}>
        <img src={langImg} alt="" />
        <a>
          <h5 className="colored">{langText}</h5>
        </a>
        <img src={down} alt="" />
      </button>
      <menu className={`flex align-center ${menu ? "open" : ""}`}>
        {langText !== "UZB" && (
          <li className="flex align-center " onClick={() => clickedLang("uz")}>
            <img src={uz} alt="" />
            <h5>UZB</h5>
          </li>
        )}
        {langText !== "RUS" && (
          <li className="flex align-center" onClick={() => clickedLang("ru")}>
            <img src={ru} alt="" />
            <h5>RUS</h5>
          </li>
        )}
      </menu>
    </Container>
  );
}

export default LanguageButtons;

const Container = styled.div`
  position: relative;
  height: fit-content;
  margin-left: 50px;
  a {
    color: var(--secondary-color);
    text-transform: uppercase;
    @media (max-width: 1599px) {
      h5 {
        font-size: 14px;
      }
    }
  }
  img {
    width: 28px;
  }
  button {
    cursor: pointer;
    gap: 5px;
    background-color: #fff0;
    border: none;
    img:last-child {
      width: 10px;
    }
  }
  menu {
    flex-direction: column;
    padding: 0px 13px;
    top: 150%;
    position: absolute;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
    transform: translateY(-70%) scale(0);
    transition: all 0.3s;
    @media (max-width: 1199px) {
      transform: translateY(-80%) scale(0);
      &.open {
        transform: translateY(-170%) scale(1) !important;
      }
    }
    &.open {
      transform: translateY(0%) scale(1);
    }
    li {
      cursor: pointer;
      padding: 13px 0;
      gap: 8px;
      color: var(--n6-color);
      @media (max-width: 1599px) {
        h5 {
          font-size: 14px !important;
        }
      }
      a {
        color: #555555;
      }
      &:first-child {
        border-bottom: 1px solid #00000029;
      }
    }
    img {
      width: 20px;
    }
  }
`;
