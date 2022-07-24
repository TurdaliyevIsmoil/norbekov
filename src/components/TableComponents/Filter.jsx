import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { UseDataContext } from "../../store/contexts/DataContext";

function Filter() {
  const { t } = useTranslation();
  const [format, setformat] = useState("all");
  const [date, setdate] = useState("all");
  const { filterFormat } = UseDataContext();

  useEffect(() => {
    filterFormat({ format: format, date: date });
  }, [format, date]);
  return (
    <Wrapper className="container">
      <form className="flex">
        <div className="form-group flex column">
          <label htmlFor="month">{t("month")}</label>
          <select name="month" id="month" disabled>
            <option value="all">{t("all")}</option>
            <option value="january">January</option>
            <option value="february">February</option>
          </select>
        </div>
        <div className="form-group flex column">
          <label htmlFor="month">{t("format")}</label>
          <select
            name="format"
            id="month"
            onChange={(e) => setformat(e.target.value)}
          >
            <option value="all">{t("all")}</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="form-group flex column">
          <label htmlFor="month">{t("category")}</label>
          <select
            name="date"
            onChange={(e) => setdate(e.target.value)}
            id="month"
          >
            <option value="all">{t("all")}</option>
            <option value="latest">{t("latest")}</option>
            <option value="oldest">{t("oldest")}</option>
          </select>
        </div>
      </form>
    </Wrapper>
  );
}

export default Filter;

const Wrapper = styled.div`
  form {
    gap: 50px;
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 25px;
      & > * {
        flex: 0 0 100%;
        max-width: 100% !important;
      }
    }
    .form-group {
      gap: 10px;
      width: 100%;
      max-width: 220px;
    }
    select {
      padding: 12px 14px;
      background: #f9f9f9;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
    }
  }
`;
