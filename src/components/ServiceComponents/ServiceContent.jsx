import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { UseDataContext } from "../../store/contexts/DataContext";
import Button from "../../UI/Button";
import Devider from "../../UI/Devider";
import EditorWrapper from "../../UI/EditorWrapper";
import ContactForm from "../ContactForm";
import OtherNews from "../NewsComponents/OtherNews";
import Title from "../Title";
import ServiceCards from "./ServiceCards";
import ServiceTableRow from "./ServiceTableRow";

function ServiceContent() {
  const lang = i18next.language;
  const [item, setitem] = useState(null);
  const [content, setcontent] = useState({
    title: "",
    body: "",
  });
  const { id } = useParams();
  const location = useLocation();
  const { t } = useTranslation();
  const { services, news, fetchServices, fetchNews } = UseDataContext();
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
    if (services?.length === 0) {
      fetchServices();
    } else {
      setitem(services.filter((i) => i.id === +id)[0]);
    }
    if (news?.length === 0) {
      fetchNews();
    }
  }, [services, location]);
  useEffect(() => {
    if (item && lang) {
      return lang === "uz"
        ? setcontent({ title: item.post_title, body: item.post_body })
        : setcontent({
            title: item.post_title_ru,
            body: item.post_body_ru,
          });
    }
  }, [lang, item]);

  return (
    <Wrapper className="container">
      <Devider half />
      <Title small title={t('services')} path="/services" />
      <Devider half />
      <div className="flex justify-between">
        <main>
          <EditorWrapper data={content.body} />
        </main>
        <aside>
          <Button darkHover>
            <h2>$500</h2>
          </Button>
          <h3 className="table-title">{t("news")} </h3>
          <div className="news">
            {news.slice(0, 3).map((i) => (
              <OtherNews data={i} />
            ))}
          </div>
        </aside>
      </div>
      <Devider half />
      <h2>O'xshash xizmatlar</h2>
      <Devider half />
      <ServiceCards data={services.slice(0, 3)} />
      <Devider half />
    </Wrapper>
  );
}

export default ServiceContent;
const Wrapper = styled.div`
  & > div {
    gap: 30px;
    align-items: flex-start;
    @media (max-width: 1199px) {
      flex-direction: column;
    }
  }
  .container {
    padding: 0;
  }
  * {
    text-align: left;
  }
  main {
    width: 100%;
    iframe {
      width: 100%;
      aspect-ratio: 16/9;
      height: auto;
    }
    p {
      font-weight: normal;
      font-size: 22px;
    }
    img {
      max-width: 100%;
    }
  }
  aside {
    height: auto;
    width: 100%;
    flex: 0 0 436px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: #ffffff;
    border: 1px solid #d5eeff;
    border-radius: 5px;
    overflow: hidden;
    .news {
      padding: 10px 15px;
      div {
        margin-bottom: 20px;
      }
    }
    @media (max-width: 1599px) {
      flex: 0 0 350px;
    }
    @media (max-width: 1199px) {
      overflow: auto;
      flex: 0 0 auto;
    }
    button h2 {
      color: white;
      @media (max-width: 1599px) {
        font-size: 48px;
      }
      @media (max-width: 1299px) {
        font-size: 32px;
      }
    }
    .table-title {
      padding: 40px 30px 20px;
    }
  }
`;
