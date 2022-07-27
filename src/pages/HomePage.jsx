import React, { useEffect } from "react";
import AboutUs from "../components/HomeComponents/AboutUs";
import Employers from "../components/HomeComponents/Employers";
import Factor from "../components/HomeComponents/Factor";
import Header from "../components/HomeComponents/Header";
import Important from "../components/HomeComponents/Important";
import MainCourses from "../components/HomeComponents/MainCourses";
import Oppontunity from "../components/HomeComponents/Oppontunity";
import Partners from "../components/HomeComponents/Partners";
import Results from "../components/HomeComponents/Results";
import Skills from "../components/HomeComponents/Skills";
import Success from "../components/HomeComponents/Success";
import Devider from "../UI/Devider";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Partners />
      <Devider half />
      <MainCourses />
      <AboutUs />
      <Oppontunity />
      <Results />
      <Devider half />
      <Skills />
      <Devider half />
      <Success />
      <Devider />
      <Factor />
      <Devider />
      <Important />
      <Employers />
    </>
  );
}

export default HomePage;
