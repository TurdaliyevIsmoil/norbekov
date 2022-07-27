import React, { useEffect } from "react";
import styled from "styled-components";
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
