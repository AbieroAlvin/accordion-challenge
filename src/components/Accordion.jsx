import { useState } from "react";
import star from "../assets/images/icon-star.svg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";

const sections = [
  {
    header: "What is Frontend Mentor, and how will it help me?",
    content:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    header: "Is Frontend Mentor free?",
    content:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    header: "Can I use Frontend Mentor projects in my portfolio?",
    content:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    header: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    content:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-White rounded-md items-left justify-left min-w-[400px] max-w-[600px] p-6">
      {/* heading */}
      <div className="flex text-left gap-4">
        <img src={star} alt="" />
        <h1 className="text-4xl font-bold text-darkpurple">FAQs</h1>
      </div>
      {/* accordion */}
      <div>
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col  items-center">
            <div
              onClick={() => handleClick(index)}
              className={`${
                activeIndex === index
                  ? "p-2 duration-500 ease-in text-darkpurple font-semibold"
                  : "bg-Wite p-2 "
              } cursor-pointer flex items-center text-[15px] justify-between w-full my-4 gap-12 text-darkpurple font-semibold`}
            >
              {section.header}
              <div>
                {activeIndex === index ? (
                  <div>
                    <img src={minus} alt="minus" />
                  </div>
                ) : (
                  <div>
                    <img src={plus} alt="plus" />
                  </div>
                )}
              </div>
            </div>
            {activeIndex === index && (
              <div
                className={`${
                  activeIndex === index
                    ? "ease-out duration-500"
                    : "ease-out duration-500"
                } text-left bg-lightpink text-[14px] rounded-md mt-2 p-4`}
              >
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
