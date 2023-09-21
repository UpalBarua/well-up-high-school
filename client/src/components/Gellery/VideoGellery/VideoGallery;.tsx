import axios from "@/api/axios";
import React, { useEffect, useState } from "react";

interface VideoData {
  _id: string;
  title: string;
  url: string;
  thumbnail: string;
}

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [galleryData, setGalleryData] = useState<VideoData[]>([]);

  useEffect(() => {
    axios
      .get("videos")
      .then((response) => {
        setGalleryData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleVideoClick = (url: string) => {
    setSelectedVideo(url);
  };

  const getVideoIdFromUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="">
      <h1 className="text-2xl text-center py-4">Video Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-5 p-3 ">
        {galleryData.map((video) => (
          <div
            key={video._id}
            className="cursor-pointer w-full "
            onClick={() => handleVideoClick(video.url)}
          >
            <div>
              <iframe
                title={video.title}
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${getVideoIdFromUrl(
                  video.url
                )}`}
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
