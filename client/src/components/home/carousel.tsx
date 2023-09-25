import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";

const HomeCarousel: React.FC = () => {
  const slides = [
    {
      image: "https://i.ibb.co/yFSBLyH/pexels-kobe-1516440.jpg",
      heading: "Slide 1 Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, maiores, officiis obcaecati dicta quae expedita eum sequi ullam illo nihil, commodi minima facilis. Nisi dolor delectus laudantium neque tenetur? Magni excepturi atque sapiente! Aliquam pariatur fugit, numquam quis nisi magni perferendis, labore nobis asperiores quidem repudiandae eos dignissimos dolor ipsum!",
      buttonText: "Learn More",
    },
    {
      image: "https://i.ibb.co/KDrHHKL/pexels-buro-millennial-1438072.jpg",
      heading: "Slide 2 Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, maiores, officiis obcaecati dicta quae expedita eum sequi ullam illo nihil, commodi minima facilis. Nisi dolor delectus laudantium neque tenetur? Magni excepturi atque sapiente! Aliquam pariatur fugit, numquam quis nisi magni perferendis, labore nobis asperiores quidem repudiandae eos dignissimos dolor ipsum!",
      buttonText: "Explore",
    },
    {
      image: "https://i.ibb.co/tszT0cK/pexels-pixabay-256455.jpg",
      heading: "Slide 3 Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, maiores, officiis obcaecati dicta quae expedita eum sequi ullam illo nihil, commodi minima facilis. Nisi dolor delectus laudantium neque tenetur? Magni excepturi atque sapiente! Aliquam pariatur fugit, numquam quis nisi magni perferendis, labore nobis asperiores quidem repudiandae eos dignissimos dolor ipsum!",
      buttonText: "Discover",
    },
  ];

  return (
    <div className="carousel-container cursor-pointer">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        speed={500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-screen w-full relative">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-screen object-cover"
              />
              <div className="overlay"></div>
            </div>
            <div className="slide-content text-center text-white absolute flex flex-col justify-center items-center gap-5 h-full top-0 left-0 z-10">
              <h2 className="text-5xl font-bold">{slide.heading}</h2>
              <p className="text-gray-200 md:w-8/12 w-10/12">{slide.text}</p>
              <Button
                variant="secondary"
                className="text-lg font-bold px-10 text-black hover:bg-transparent hover:text-white delay-100"
              >
                {slide.buttonText}
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
