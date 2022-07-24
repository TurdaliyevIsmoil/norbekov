import React, { useEffect } from "react";
import styled from "styled-components";
import Devider from "../UI/Devider";
import Title from "../components/Title";
import ServiceContent from "../components/ServiceComponents/ServiceContent";

function ServiceInner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <ServiceContent />
    </Wrapper>
  );
}

export default ServiceInner;
const Wrapper = styled.div``;
