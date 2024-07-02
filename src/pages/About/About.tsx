import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/About_page/Hero/Hero";
import Contact from "../../components/Home/Contact/Contact";
import About_Us from "../../components/About_page/About_Us/About_Us";
import Mission from "../../components/About_page/Our_Mission/Mission";
import Service from "../../components/About_page/Services/Service";
import Team from "../../components/About_page/Team/Team";
import FAQ from "../../components/FAQ/FAQ";

const About = () => {
  return (
    <DefaultLayout>
      <Hero></Hero>
      <About_Us></About_Us>
      <Mission></Mission>
      <Service></Service>
      <Team></Team>
      <FAQ></FAQ>
      <Contact></Contact>
    </DefaultLayout>
  );
};

export default About;
