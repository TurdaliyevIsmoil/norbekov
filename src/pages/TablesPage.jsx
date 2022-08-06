import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Devider from "../UI/Devider";
import Filter from "../components/TableComponents/Filter";
import TablesCards from "../components/TableComponents/TablesCards";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { UseDataContext } from "../store/contexts/DataContext";
import Loading from "../components/Loading";

function TablesPage() {
  const { t } = useTranslation();
  const { filtered, fetchTables, tables } = UseDataContext();
  const [count, setcount] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (tables.length === 0) {
      fetchTables();
    }
  }, [tables]);
  return (
    <Wrapper>
      <Loading load={tables.length === 0} />
      <Devider half />
      <Title title={t("tables-title")} />
      <Devider half />
      <Filter />
      <Devider half />
      <TablesCards tables={filtered.slice(0, count)} />
      <Devider half />
      {count <= filtered.length && (
        <h4
          onClick={() => setcount(filtered.length)}
          className="colored flex justify-center"
        >
          {t("more")}
        </h4>
      )}
    </Wrapper>
  );
}

export default TablesPage;
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
