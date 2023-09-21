import axios from "@/api/axios";
import GalleryIMG from "./GalleryIMG";
import { useEffect, useState } from "react";

interface gelleryData {
  image: string;
  title: string;
  _id: number;
}

const PhotoGellery: React.FC = () => {
  const [gelleryData, setGelleryData] = useState<gelleryData[]>([]);

  useEffect(() => {
    axios.get('images')
      .then((response) => {
        setGelleryData(response.data.data);
     
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="mt-10">
      <p className="text-center text-3xl font-semibold ">Photo Gellery</p>
      <div className="mx-auto md:gap-8 grid grid-cols-1 md:grid-cols-3 my-5 ">
        {gelleryData?.map((img) => (
          <GalleryIMG img={img} key={img?._id}></GalleryIMG>
        ))}
      </div>
    </div>
  );
};

export default PhotoGellery;
