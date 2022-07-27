import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/Button";

function NewsCard({ data }) {
  const [item, setitem] = useState({ title: "", body: "" });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lang = i18next.language;
  useEffect(() => {
    const div = document.createElement("diV");
    if (lang) {
      div.innerHTML = lang === "uz" ? data.post_body : data.post_body_ru;
      return lang === "uz"
        ? setitem({ title: data.post_title, body: div.innerText.slice(0, 140) })
        : setitem({
            title: data.post_title_ru,
            body: div.innerText.slice(0, 140),
          });
    }
  }, [lang]);
  return (
    <Wrapper className="flex column align-start">
      <img src={"https://"+data.post_img_path} alt="" />
      <p className="colored">
        {new Date(data.post_date).toDateString("uz-Latn")}
      </p>
      <h4>{item.title + "..."}</h4>
      <p>{item.body + "..."}</p>
      <Button onClick={() => navigate(`/news/${data.id}`)} darkHover>
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
    </Wrapper>
  );
}

export default NewsCard;

const Wrapper = styled.div`
  img {
    width: 100%;
    aspect-ratio: 16/10;
    object-fit: cover;
  }
  button {
    margin-top: auto;
  }
  h4 {
    @media (max-width: 1023px) {
      font-size: 18px;
    }
  }
  @media (max-width: 1023px) {
    button {
      padding: 15px 30px;
    }
  }
  p {
    margin: 22px 0;
    @media (max-width: 1023px) {
      font-size: 16px;
    }
    @media (max-width: 767px) {
      margin: 16px 0;
    }
  }
`;
