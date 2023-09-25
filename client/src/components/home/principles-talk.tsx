import Image from "next/image";
import React from "react";

const PrincipleTalk: React.FC = () => {
  return (
    <div data-aos="fade-up">
      <div className="flex justify-center items-center my-10">
        <div className="container mx-auto p-4 w-full md:w-10/12 shadow-lg">
          {/* <h2 className="font-semibold text-2xl my-5">Principles talk</h2> */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 bg-white rounded-lg">
            <div className="w-full md:w-1/3 p-8">
              <div
                style={{
                  maxWidth: "100%",
                  maxHeight: "300px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="https://i.ibb.co/kg80DT9/pngwing-com.png"
                  alt="Image Alt Text"
                  width={500}
                  height={300}
                  className="h-full rounded-lg"
                  style={{ height: "100% !important" }}
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 p-8 py-0">
              <h2 className="capitalize text-4xl font-bold mb-1">
                Alexander robert
              </h2>
              <span className="capitalize text-xl font-normal text-gray-500">
                principle
              </span>
              <p className="my-5 text-gray-400 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                assumenda reiciendis ut repellendus eos molestias iusto esse
                placeat necessitatibus! Ipsa rerum perspiciatis doloribus
                consequatur odio cum esse nesciunt quidem quod, similique fugiat
                optio quasi modi repellat praesentium quo. Aliquam neque numquam
                dolorum, nulla tenetur alias enim quibusdam eaque velit sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleTalk;
