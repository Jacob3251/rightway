import React from "react";
import image1 from "../../../assets/images/About_images/Our_Mission/Mission.png";

const Mission = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-10 h-full w-full flex flex-col md:flex-row justify-between items-start md:space-x-[20px] lg:space-x-[40px] px-[30px]  ">
      <div className=" mb-[50px] md:mb-0 flex flex-col w-[85%] md:w-auto md:justify-start md:items-start text-[16px] font-semibold">
        <div className="text-primary font-bold md:text-4xl text-2xl  my-5">
          Our Mission
        </div>

        <div className="space-y-5 leading-8">
          <p>
            At Right Way Consultancy, we believe in the transformative power of
            education and the endless opportunities it provides. Founded with a
            vision to guide students towards their academic aspirations, we
            specialize in assisting individuals in their pursuit of higher
            education across the globe.
          </p>

          <p>
            With years of experience and a dedicated team of experts, we have
            established ourselves as a beacon of support for students aspiring
            to study in renowned institutions in the UK, USA, Canada, Australia,
            and Europe. Our personalized approach ensures that each student
            receives tailored guidance, from selecting the right university to
            navigating complex application processes and visa requirements.
          </p>

          <p>
            We take pride in our commitment to excellence and our unwavering
            dedication to our students' success. Whether you're a high school
            graduate embarking on your first international adventure or a
            seasoned professional seeking advanced studies, we're here to
            accompany you on your journey every step of the way.
          </p>
        </div>
      </div>

      <div className="md:min-w-[300px]  md:max-w-[450px] w-full">
        <img src={image1} alt="" className="rounded-3xl w-[100%]" />
      </div>
    </div>
  );
};

export default Mission;
