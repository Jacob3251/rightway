// import React from "react";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Explore = () => {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <div className="p-10">
      <div className="bg-vid bg-cover bg-center w-full min-w-[320px] lg:max-w-[1280px] lg:min-h-[540px] min-h-[420px] h-full mx-auto rounded-3xl">
        {!showIframe ? (
          <div className="w-full lg:min-h-[540px] min-h-[420px] h-full relative flex flex-col justify-center items-center p-5 sm:p-10 md:items-start md:justify-end md:p-20 lg:p-32 text-white bg-[#E0E1E9] bg-opacity-20">
            <div className="w-full h-full">
              <h1 className="md:text-4xl text-2xl p-2  font-bold mb-4">
                Discover Your Study Abroad Journey
              </h1>
              <p className="md:text-lg mb-2 p-2">
                From campus tours to student testimonials, explore study abroad
                destinations and experiences from the comfort of your home. Let
                us inspire and guide you as you take the first step towards your
                international education adventure.
              </p>
            </div>
            <div className="absolute top-[5%] right-[5%]">
              <button
                className="bg-white rounded-full aspect-square text-white font-bold py-2 px-4 "
                onClick={toggleIframe}
              >
                <FaPlay className="text-primary text-2xl " />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full lg:min-h-[540px] min-h-[420px] h-full relative flex flex-col justify-center items-center  md:items-start md:justify-end  rounded-3xl overflow-hidden text-white bg-red-500 bg-opacity-20">
            <iframe
              className="w-full lg:min-h-[540px] min-h-[420px] h-full"
              src="https://www.youtube.com/embed/D_qWubbBw5U?si=2wYaMEQZ2KwmtCW9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {/* <button
              className="absolute top-0 right-0 m-4 bg-white  text-white font-bold py-2 px-4 "
              onClick={toggleIframe}
            >
              <FaPlay className="text-primary " />
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
