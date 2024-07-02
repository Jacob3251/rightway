import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function DefaultLayout({ children }) {
  return (
    <div className="max-w-[1440px] mx-auto relative h-screen w-full">
      <div className=" absolute top-0 left-0 right-0">
        <Navbar></Navbar>
      </div>
      <div className=" absolute top-24 left-0 right-0">
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default DefaultLayout;
