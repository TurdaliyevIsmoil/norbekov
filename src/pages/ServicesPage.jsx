import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../components/Loading";
import ServiceCards from "../components/ServiceComponents/ServiceCards";
import Title from "../components/Title";
import { UseDataContext } from "../store/contexts/DataContext";
import Devider from "../UI/Devider";

function ServicesPage() {
  const { t } = useTranslation();
  const { services, fetchServices } = UseDataContext();
  useEffect(() => {
    if (services?.length === 0) {
      fetchServices();
    }
  }, [services]);
  return (
    <div>
      <Loading load={services.length === 0} />
      <Devider half />
      <Title title={t("service-title")} />
      <Devider half />
      {services && <ServiceCards data={services} />}
      <Devider half />
    </div>
  );
}

export default ServicesPage;
