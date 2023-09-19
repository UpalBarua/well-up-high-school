import React from "react";

interface GalleryProps {
  img: {
    image: string;
    title: string;
  };
}

const GalleryIMG: React.FC<GalleryProps> = ({ img }) => {
  const { image, title } = img;

  return (
    <div className="mb-3 md:mb-0">
      <div className="relative bg-white rounded-md overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-lg">
        <div className="group">
          <img
            src={image}
            alt={title}
            className="w-full h-[25dvh] md:h-[30dvh] object-cover opacity-100 scale-100 hover:scale-110 filter  transition-all  duration-700  hover:blur-[6px] group-hover:blur-[6px]"
          />

          <div className="p-4 absolute bottom-0 left-0 right-0 transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-5 md:mb-8">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryIMG;
