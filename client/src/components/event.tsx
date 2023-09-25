import React, { useEffect } from "react";
import image1 from "../assets/debate.jpeg";
import image2 from "../assets/farewell.jpeg";
import image3 from "../assets/orientation.jpeg";
import image4 from "../assets/scienceFair.jpeg";
import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";

const Event = () => {
  const allEvent = [
    {
      id: 1,
      event_heading: "Debate Program on Campus",
      event_details:
        "The SSC 2023 Meritorious Students Felicitation Ceremony at  celebrated academic excellence.The event recognized their outstanding.",
      image: image1,
      date: "17 August 2023",
    },
    {
      id: 2,
      event_heading: "Celebrating the farewell reception of HSC 2023",
      event_details:
        "The farewell reception for HSC candidates at wellup school was a joyous and nostalgic event. It marked the culmination . ",
      image: image2,
      date: "10 August 2023",
    },
    {
      id: 3,
      event_heading: "Orientation for newcomer",
      event_details:
        "A discussion meeting and program were held at wellup school.This is a great event for new comer .Hopefully they are enjoyed  ",
      image: image3,
      date: "23 August 2023",
    },
    {
      id: 4,
      event_heading: "Science Fair on held",
      event_details:
        "The SSC 2023 Meritorious Students Felicitation Ceremony at wellup school celebrated academic excellence.Great achievement for us",
      image: image4,
      date: "6 August 2023",
    },
  ];

  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({
        duration: 800,
        once: false,
      });
    });
  }, []);

  return (
    <div className="my-10">
      {/*       <h2 className="my-5 text-2xl font-bold text-red-500">
        Our latest events
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {allEvent?.map((all, index) => (
          <section
            key={all.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="flex justify-center flex-col lg:flex-row gap-4">
              <div className=" w-full lg:w-1/2">
                <Image
                  src={all?.image}
                  alt=""
                  height={500}
                  width={300}
                  className="w-full"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h1 className="text-[1.3rem] font-bold">
                  {" "}
                  {all?.event_heading}
                </h1>
                <p>{all?.event_details}</p>
                <div className="flex gap-4 items-center mt-2 font-semibold">
                  <BsCalendar2Date />
                  <p>{all?.date}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Event;
