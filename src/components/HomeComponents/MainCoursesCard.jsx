import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/Button";

function MainCoursesCard({ data }) {
  // const [item, setitem] = useState({ title: "", body: "" });
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const lang = i18next.language;
  // useEffect(() => {
  //   const div = document.createElement("diV");
  //   if (lang) {
  //     div.innerHTML = lang === "uz" ? data.post_body : data.post_body_ru;
  //     return lang === "uz"
  //       ? setitem({ title: data.post_title, body: div.innerText.slice(0, 140) })
  //       : setitem({
  //           title: data.post_title_ru,
  //           body: div.innerText.slice(0, 140),
  //         });
  //   }
  // }, [lang]);
  return (
    <Wrapper className="flex column">
      <img src={data.img} alt="Image" />
      <div className="content flex column">
        <h5>{data.title}</h5>
        <p className="sm">{data.body}</p>
      </div>
      <Button darkHover={true} onClick={() => navigate(`/contacts`)}>
        <h5>{t(data.format)}</h5>
      </Button>
    </Wrapper>
  );
}

export default MainCoursesCard;
const Wrapper = styled.article`
  border: 1px solid #ededed;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 24px 51px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media (max-width: 1599px) {
    .content {
      padding: 16px !important;
    }
    p {
      font-size: 12px;
    }
    h5 {
      font-size: 18px;
    }
    button {
      h5 {
        font-size: 14px !important;
      }
    }
  }
  @media (max-width: 767px) {
    p {
      font-size: 18px !important;
    }
    .content > h5 {
      font-size: 20px;
    }
  }
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
  }
  button {
    margin: 10px;
    margin-top: auto;
    padding-left: 10px;
    padding-right: 10px;
    width: auto;
    h5 {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 140%;
    }
  }
  p {
    padding-left: 10px;
    border-left: 1px solid var(--main-color);
  }
  .content {
    padding: 20px;
    gap: 18px;
  }
  h5 {
    text-transform: capitalize;
  }
`;
