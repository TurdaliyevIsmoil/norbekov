import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { UseDataContext } from "../store/contexts/DataContext";
import Button from "../UI/Button";

function ContactForm() {
  const { t } = useTranslation();
  const [disable, setdisable] = useState(false);
  const [error, seterror] = useState({
    name: null,
    surname: null,
    phone: null,
    service: null,
    message: null,
  });

  const { sendContact } = UseDataContext();

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, surname, phone, service, message } = e.target;
    new Promise((resolve, reject) => {
      seterror((prev) => ({
        ...prev,
        name: name.value === "",
        surname: surname.value === "",
        phone: phone.value === "",
        service: service.value === "title",
        message: message.value === "",
      }));
      return resolve();
    }).then((e) => {
      if (
        name.value === "" ||
        surname.value === "" ||
        phone.value === "" ||
        service.value === "title" ||
        message.value === ""
      ) {
        return;
      } else {
        const data = {
          firstName: name.value,
          lastName: surname.value,
          phoneNumber: phone.value,
          text: message.value,
          typeService: service.value,
        };
        sendContact(data);
        setdisable(true);
      }
    });
  };
  return (
    <Wrapper className="">
      <main className="flex align-stretch">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.058787782157!2d69.18378961744385!3d41.28582500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89ef4075d4e7%3A0x159b43a9befbdf32!2zTm9yYmVrb3YgTWFya2F6aSB8INCd0L7RgNCx0LXQutC-0LIg0JzQsNGA0LrQsNC30Lg!5e0!3m2!1suz!2s!4v1653450423301!5m2!1suz!2s"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <form onSubmit={submitHandler}>
          <h2>
            {t("form-title")} <span className="absolute">{t("contacts")}</span>{" "}
          </h2>

          <div className="form-group">
            <input
              type="text"
              name="name"
              className={`${error.name ? "error" : ""}`}
              placeholder={t("form-name")}
              disabled={disable}
            />
            <input
              type="text"
              name="surname"
              className={`${error.surname ? "error" : ""}`}
              placeholder={t("form-surname")}
              disabled={disable}
            />
            <input
              type="text"
              name="phone"
              className={`${error.phone ? "error" : ""}`}
              placeholder={t("form-phone")}
              disabled={disable}
            />
            <select
              name="service"
              id=""
              className={`${error.service ? "error" : ""}`}
              disabled={disable}
            >
              <option value={"title"}>{t("form-service")}</option>
              <option value="some1">Some 1</option>
              <option value="some2">Some 2</option>
              <option value="some3">Some 3</option>
            </select>
          </div>
          <textarea
            className={`${error.message ? "error" : ""}`}
            name="message"
            id=""
            rows="2"
            placeholder={t("form-message")}
            disabled={disable}
          ></textarea>
          <Button darkHover disabled={disable}>
            <h5>{!disable ? t("form-send") : t("sent")}</h5>
          </Button>
        </form>{" "}
      </main>
    </Wrapper>
  );
}

export default ContactForm;

const Wrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;
  main {
    @media (max-width: 1023px) {
      flex-direction: column-reverse;
      h2 {
        text-align: center !important;
      }
    }
  }
  iframe {
    @media (max-width: 1023px) {
      flex: 0 0 400px !important;
    }
  }
  form {
    overflow: hidden;
    margin: 0 auto;
    max-width: 1130px;
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(
      111.27deg,
      rgba(41, 165, 218, 0.324) -18.04%,
      rgba(41, 165, 218, 0) 94.12%
    );
    .form-group {
      position: inherit;
      z-index: 3;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
      grid-column-gap: 24px;
      margin-bottom: 24px;
    }
    @media (max-width: 1023px) {
      padding: 50px 40px;
      .form-group {
        grid-gap: 36px !important;
      }
      input,
      textarea,
      select {
        border-width: 1px !important;
      }
    }
    @media (max-width: 767px) {
      padding: 50px 20px;
      .form-group {
        grid-template-columns: 1fr;
      }
      input,
      textarea,
      select {
        font-size: 20px !important;
      }
    }
    h2 {
      text-align: left;
      margin-bottom: 20px;
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
    }
    input,
    textarea,
    select {
      width: 100%;
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 100%;
      color: var(--n6-color);
      border: 0;
      border-bottom: 1px solid var(--n7-color);
      padding: 15px 0;
      background: transparent;
      outline: none;
      &:disabled {
        border-bottom-color: #4bb543ac;
        color: #cdcdcdcd;
      }
      &.error {
        border-bottom-color: red;
      }
      &:focus {
        border-color: var(--main-color);
      }
    }
    button {
      margin-top: 36px;
      width: 100%;
    }
  }
  main {
    & > * {
      flex: 0 0 50%;
    }
  }
`;
