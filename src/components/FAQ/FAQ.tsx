import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" ">
      <button
        className="w-full text-left px-4 py-2  hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="text-blue-900 md:text-xl">{title}</span>
          <span>
            {isOpen ? (
              <IoIosArrowUp className="text-blue-900" />
            ) : (
              <IoIosArrowDown className="text-blue-900  " />
            )}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-gray-700 md:text-xl">{content}</div>
      )}
    </div>
  );
};
const FAQ = () => {
  const accordionData = [
    {
      title: "What are the benefits of studying abroad?",
      content:
        "Follow us on our social media for updates, tips and resources on studying abroad.",
    },
    {
      title: "How do I choose the right university and program?",
      content:
        "Follow us on our social media for updates, tips and resources on studying abroad.",
    },
    {
      title: "What is the application process like for studying abroad?",
      content:
        "Follow us on our social media for updates, tips and resources on studying abroad.",
    },
    {
      title:
        "How can Right Way Consultancy help me with my study abroad journey?",
      content:
        "Follow us on our social media for updates, tips and resources on studying abroad.",
    },
    {
      title: "What are the visa requirements for studying abroad?",
      content:
        "Follow us on our social media for updates, tips and resources on studying abroad.",
    },

    {
      title: "Is aid available for international students?",
      content:
        "Follow us on our social media for updates, tips and resources on studying abroad.",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto md:flex justify-between items-start px-10 mt-10">
      {/* left-div */}
      <div className="md:flex-1">
        <h1 className="text-primary md:text-4xl text-2xl font-bold md:p-10">
          Frequently Asked Questions
        </h1>
        <p className="text-[#393939] md:p-10 md:pt-5 md:text-xl ">
          Find answers to common questions about studying abroad and our
          consultancy services below.
        </p>
      </div>

      {/* right-div */}
      <div className="md:flex-1">
        <main className="p-4">
          <div className="max-w-md mx-auto mt-8">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQ;
