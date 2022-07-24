import i18next, { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { UseDataContext } from "../../store/contexts/DataContext";
import Devider from "../../UI/Devider";
import EditorWrapper from "../../UI/EditorWrapper";
import Title from "../Title";
import OtherNews from "./OtherNews";
// import '@tinymce/tinymce-react/lib/es2015/main/t'
function NewsContent() {
  const [item, setitem] = useState(null);
  const [content, setcontent] = useState({
    title: "",
    body: "",
  });
  const { id } = useParams();
  const lang = i18next.language;
  const location = useLocation();
  const { news, fetchNews } = UseDataContext();
  useEffect(() => {
    if (news?.length > 0) {
      setitem(news?.filter((i) => i.id === +id)[0]);
    } else {
      fetchNews();
    }
  }, [news, location]);

  // Language detector
  i18next.on("languageChanged", function (lng) {
    if (item && lng) {
      return lng === "uz"
        ? setcontent({ title: item.post_title, body: item.post_body })
        : setcontent({
            title: item.post_title_ru,
            body: item.post_body_ru,
          });
    }
  });

  useEffect(() => {
    if (item && lang) {
      return lang === "uz"
        ? setcontent(() => ({ title: item.post_title, body: item.post_body }))
        : setcontent(() => ({
            title: item.post_title_ru,
            body: item.post_body_ru,
          }));
    }
  }, [lang, item]);
  return (
    <Wrapper className="container">
      <Devider half />
      <Title title={t("news-title")} path="/news" />
      <Devider half />
      {item ? (
        <>
          <h2>{content.title}</h2>
          <Devider half />
          <main className="flex justify-between align-start">
            <EditorWrapper data={content.body} />
            <aside>
              <h3>Boshqa Yangiliklar</h3>
              {news?.slice(0, 3).map((i) => (
                <OtherNews data={i} />
              ))}
            </aside>
          </main>{" "}
        </>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default NewsContent;
const Wrapper = styled.div`
  * {
    text-align: left;
  }
  h2 {
    line-height: 140%;
    @media (max-width: 1599px) {
      font-size: 48px;
    }
    @media (max-width: 1023px) {
      font-size: 32px;
    }
    @media (max-width: 767px) {
      font-size: 24px;
    }
  }
  main {
    gap: 30px;
    @media (max-width: 1199px) {
      flex-direction: column;
    }
  }
  aside {
    border: 1px solid #cdeaff;
    flex: 0 0 320px;
    padding: 30px;
    width: 100%;
    display: block;
    background: var(--aqua-color);
    @media (max-width: 1199px) {
      display: flex;
      justify-content: flex-start;
      gap: 24px;
      flex-wrap: wrap;
      h3 {
        flex: 0 0 100%;
      }
      & > div {
        flex: 0 0 calc(33% - 12px);
        @media (max-width: 767px) {
          flex: 0 0 100%;
        }
      }
    }
    @media (max-width: 767px) {
      padding: 0px;
      margin-top: 36px;
      background-color: #fff;
      border: 0;
    }
    & > div {
      margin-top: 36px;
    }
  }
`;
