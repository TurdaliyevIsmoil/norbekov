import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MainContacts from "../components/ContactComponents/MainContacts";
import ContactForm from "../components/ContactForm";
import Title from "../components/Title";
import Devider from "../UI/Devider";

function ContactsPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Devider half />
      <Title title={t("contact-title")} />
      <Devider half />
      <MainContacts />
    </div>
  );
}

export default ContactsPage;
