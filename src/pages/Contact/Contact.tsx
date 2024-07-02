import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Contact_Form from "../../components/Contact/Contact_Form/Contact_Form";
import FAQ from "../../components/FAQ/FAQ";
import Contact1 from "../../components/Home/Contact/Contact";
import Map from "../../components/Contact/Map/Map";

const Contact = () => {
  return (
    <DefaultLayout>
      <Contact_Form></Contact_Form>
      <Map></Map>
      <FAQ></FAQ>
      <Contact1></Contact1>
    </DefaultLayout>
  );
};

export default Contact;
