import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/Button";

function CourseCard({ data }) {
  const [item, setitem] = useState({ title: "", body: "" });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lang = i18next.language;
  const time = data.duration.split(",");
  const monthNames = [
    "Jan",
    "Febr",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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
    <Wrapper className="flex column">
      <div className="image">
        <img src={"https://" + data.post_img_path} alt="" />
      </div>
      <div className="content">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <br />
      </div>
      <div className="bottom flex column ">
        <h4 className="flex justify-between align-center colored">
          <span>
            {time[0]}
          </span>
          <span>{time[1]}</span>
        </h4>
        <Button onClick={() => navigate(`/tables/${data.id}`)} darkHover>
          <h5 className="flex align-center">
            {new Date(data.date).getDay()}
            <span>{monthNames[new Date(data.date).getMonth()]}</span>
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
          </h5>
          <h4>{data.price}</h4>
        </Button>
      </div>
    </Wrapper>
  );
}

export default CourseCard;
const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 19px 66px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  overflow: hidden;
  .image {
    img {
      width: 100%;
      aspect-ratio: 16/10;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    padding: 30px 30px 0;
    @media (max-width: 1199px) {
      padding: 15px 20px 0;
    }
    p {
      margin: 20px 0;
      @media (max-width: 1199px) {
        font-size: 16px;
      }
      @media (max-width: 767px) {
        font-size: 18px;
      }
    }
    h3 {
      font-size: 28px;
    }
  }
  .bottom {
    margin-top: auto;
    width: 100%;
    padding: 30px;
    padding-top: 0;
    .colored {
      padding: 0 5px;
    }
    button {
      margin-top: 16px;
      width: 100% !important;
      padding: 18px 35px;
      justify-content: space-between;
      @media (max-width: 1199px) {
        padding: 15px 25px;
      }
      h4 {
        font-size: 18px;
        text-align: right;
      }
      h5 {
        gap: 10px;
        font-size: 18px;
        text-align: left;
      }
    }
    @media (max-width: 1199px) {
      padding: 0 15px 15px;
    }
  }
`;
