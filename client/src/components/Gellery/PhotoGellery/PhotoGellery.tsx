import GalleryIMG from "./GalleryIMG";

interface gelleryData {
  image: string;
  title: string;
  _id: number;
}

const PhotoGellery: React.FC = () => {
  const gelleryData: gelleryData[] = [
    {
      image:
        "https://i.ibb.co/0yKZ5cr/photo-1523050854058-8df90110c9f1-1.jpg",
      title: "SCHOOL IMAGE",

      _id: 1,
    },
    {
      image:
        "https://i.ibb.co/ZV94jNm/photo-1509062522246-3755977927d7.jpg",
      title: "WoSCHOOL IMAGE",

      _id: 2,
    },
    {
      image: "https://i.ibb.co/MG1KQXq/photo-1503676260728-1c00da094a0b.jpg",
      title: "SCHOOL IMAGE",

      _id: 3,
    },
    {
      image:
        "https://i.ibb.co/qC1VW1n/photo-1495727034151-8fdc73e332a8.jpg",
      title: "SCHOOL IMAGE",

      _id: 4,
    },
    {
      image:
        "https://i.ibb.co/hKZk9Bm/kenny-eliason-z-FSo6bn-ZJTw-unsplash.jpg",
      title: "WoSCHOOL IMAGE",

      _id: 5,
    },
    {
      image: "https://i.ibb.co/0mFjJKQ/kimberly-farmer-l-Uaa-KCUANVI-unsplash.jpg",
      title: "SCHOOL IMAGE",

      _id: 6,
    },
  ];

  return (
   <div className="mt-10">
   <p className="text-center text-3xl font-semibold ">Photo Gellery</p>
    <div className=" mx-auto md:gap-8 grid grid-cols-1 md:grid-cols-3 my-5 ">
      {gelleryData?.map((img) => (
        <GalleryIMG img={img} key={img?._id}></GalleryIMG>
      ))}
    </div>
    </div>
  );
};

export default PhotoGellery;
