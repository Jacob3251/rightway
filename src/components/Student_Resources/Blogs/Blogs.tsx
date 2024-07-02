import React from "react";
import image1 from "../../../assets/images/Resources_Images/image-1.png";
import image2 from "../../../assets/images/Resources_Images/image-2.png";
import image3 from "../../../assets/images/Resources_Images/image-3.png";
import image4 from "../../../assets/images/Resources_Images/image-4.png";
import image5 from "../../../assets/images/Resources_Images/image-5.png";
import image6 from "../../../assets/images/Resources_Images/image-6.png";
import image7 from "../../../assets/images/Resources_Images/image-7.png";
import image8 from "../../../assets/images/Resources_Images/image-8.png";
import image9 from "../../../assets/images/Resources_Images/image-9.png";
import image10 from "../../../assets/images/Resources_Images/image-10.png";

const Blogs = () => {
  return (
    <div className="max-w-[1280px] w-full mx-auto p-12 flex flex-col justify-center items-center">
      {/* header */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start w-full space-y-5 lg:space-y-0 mb-5">
        <h1 className="text-primary text-4xl flex-1 font-bold md:pl-10 text-center lg:text-left">
          Our Blogs & Articles
        </h1>
        <p className="font-medium w-full text-center lg:text-left lg:w-[70%]">
          Stay updated with the latest trends, tips, and insights on studying
          abroad through our informative blog articles. From destination
          spotlights to application advice, our blog covers a wide range of
          topics to help you make informed decisions about your international
          education.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-5 lg:p-10 ">
        <div className="">
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image1} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>
            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        <div className="">
          {" "}
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image2} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>
            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        <div className="">
          {" "}
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image3} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>

            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image4} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>
            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image5} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>
            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image6} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>
            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image7} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>
            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image8} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>
            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" bg-[#E0E1E9] flex flex-col p-4 my-4 rounded-3xl">
            <img src={image9} alt="" className="" />

            <h3 className="text-primary text-2xl font-bold p-2 pt-4 pb-0">
              The Benefits of Studying Abroad: A Life-changing Experience
            </h3>
            <div className="p-2 flex pl-2 space-x-3">
              <img src={image10} alt="" className="rounded-3xl" />
              <div>
                Ayesha Rahman <br />
                April 15, 2024
              </div>
            </div>
            <p className="p-1 pb-0">
              In today's interconnected world, studying abroad has become
              increasingly popular ......
            </p>
            <div className=" flex">
              <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary hover:bg-[#3FB549] hover:border-none hover:text-white">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Show Button */}
      <div className="mx-auto  w-[150px] p-3 md:pt-6">
        <button className="bg-primary text-white p-2 rounded-3xl w-[100%]">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Blogs;
