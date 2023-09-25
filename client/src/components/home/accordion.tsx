import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faqs = [
  {
    title: "What is the history and background of Well-Up High School",
    content:
      "Well-Up High School was founded in [year of establishment] and has a rich history of providing quality education to students in our community.",
  },
  {
    title:
      "What are the academic programs and courses offered at Well-Up High School",
    content:
      "Well-Up High School offers a diverse range of academic programs, including college-preparatory courses, honors classes, and elective courses in various subjects. Our curriculum is designed to meet the needs and interests of all students.",
  },
  {
    title:
      " What extracurricular activities and clubs are available for students to join",
    content:
      "Well-Up High School boasts a vibrant extracurricular scene, with clubs, sports teams, and special interest groups. Students have the opportunity to participate in activities that align with their passions and talents.",
  },
  {
    title:
      " How does Well-Up High School support student success and well-being",
    content:
      "Our school is committed to fostering both academic and personal growth. We provide academic support through tutoring, counseling services, and a nurturing learning environment. Additionally, we have programs in place to promote students' social and emotional well-being.",
  },
  {
    title:
      "What are the facilities and resources available at Well-Up High School",
    content:
      "Well-Up High School is equipped with modern facilities, including state-of-the-art classrooms, a library, sports facilities, and technology resources. We also have dedicated staff members who are here to assist students in utilizing these resources effectively.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div data-aos="zoom-in">
      <div className="my-10 w-full lg:w-6/12 md:w-8/12 m-auto  rounded-lg p-3">
        <div className="text-center text-3xl font-bold text-red-500 py-5">
          frequently asked questions
        </div>
        {Faqs.map((item, index) => (
          <div className="accordion" key={index}>
            <div
              className="accordion-header flex justify-between gap-5 border py-3 px-3 text-md font-bold select-none"
              onClick={() => toggleAccordion(index)}
            >
              <h2>
                {index + 1}. {item.title}?
              </h2>
              <span>
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            <div className="accordion-bodyn bg-slate-100">
              {openIndex === index && (
                <div className="p-3">
                  <span className="text-3xl mr-2">...</span>
                  {item.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
