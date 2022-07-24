import React, { useEffect } from "react";
import NewsContent from "../components/NewsComponents/NewsContent";
import Title from "../components/Title";
import Devider from "../UI/Devider";

function NewInner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NewsContent />
      <Devider half />
    </div>
  );
}

export default NewInner;
