import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/Student_Resources/Hero/Hero";
import FAQ from "../../components/FAQ/FAQ";
import Contact from "../../components/Home/Contact/Contact";
import Blogs from "../../components/Student_Resources/Blogs/Blogs";

const Resources = () => {
  return (
    <div>
      <DefaultLayout>
        <Hero></Hero>
        <Blogs></Blogs>
        <FAQ></FAQ>
        <Contact></Contact>
      </DefaultLayout>
    </div>
  );
};

export default Resources;
