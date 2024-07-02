import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/Universities/Hero/Hero";
import FAQ from "../../components/FAQ/FAQ";
import Contact from "../../components/Home/Contact/Contact";
import Usa from "../../components/Universities/USA/Usa";
import Uk from "../../components/Universities/UK/Uk";
import Canada from "../../components/Universities/CANADA/Canada";
import Australia from "../../components/Universities/AUSTRALIA/Australia";
import Other_Uni from "../../components/Universities/Other_UNI/Other_Uni";

function University() {
  return (
    <DefaultLayout>
      <Hero></Hero>
      <Usa></Usa>
      <Uk></Uk>
      <Canada></Canada>
      <Australia></Australia>
      <Other_Uni></Other_Uni>
      <FAQ></FAQ>
      <Contact></Contact>
    </DefaultLayout>
  );
}

export default University;
