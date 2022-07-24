import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Loading from "../components/Loading";
import NewsCards from "../components/NewsComponents/NewsCards";
import Title from "../components/Title";
import { UseDataContext } from "../store/contexts/DataContext";
import Devider from "../UI/Devider";

function NewsPage() {
  const { t } = useTranslation();
  const { news, fetchNews } = UseDataContext();
  const [notFound, setnotFound] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (news?.length === 0) {
      fetchNews().then(() => setnotFound(":("));
    }
  }, [news]);
  return (
    <Wrapper>
      <Devider half />
      <Title title={t("news-title")} />
      <Devider half />
      {news.length === 0 && !notFound && <Loading load={true} />}
      {news?.length === 0 && notFound ? notFound : <NewsCards data={news} />}
      <Devider half />
    </Wrapper>
  );
}

export default NewsPage;

const Wrapper = styled.div`
  & > h4 {
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: var(--dark-main-color);
    }
  }
`;
