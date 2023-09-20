// ?video url spliting into VedioId for====>> Note when data come from DB then is fucn will be needed
// const getVideoIdFromUrl= (url)=> {

//   if (url.includes('youtube.com/watch?v=')) {

//     const parts = url.split('v=');
//     if (parts.length === 2) {

//       const videoId = parts[1];
//       return videoId;
//     }
//   }
//   return null;
// }
//  EX-const videoId = getVideoIdFromUrl(youtubeUrl);

import React, { useState } from "react";

const videoData = [
  {
    id: "1",
    title: "Video 1",
    videoId: "rbdKSNeTQ5k",
  },
  {
    id: "2",
    title: "Video 2",
    videoId: "vvkLx-2JSTY",
  },
  {
    id: "3",
    title: "Video 3",
    videoId: "5Bxx18NjHhg",
  },
  {
    id: "15",
    title: "Video 1",
    videoId: "rbdKSNeTQ5k",
  },
  {
    id: "24",
    title: "Video 2",
    videoId: "vvkLx-2JSTY",
  },
  {
    id: "3d",
    title: "Video 3",
    videoId: "5Bxx18NjHhg",
  },
];

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="">
      <h1 className="text-2xl text-center py-4">Video Gallery</h1>
      <div className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-5 p-3 ">
        {videoData.map((video) => (
          <div
            key={video.id}
            className=" cursor-pointer w-full "
            onClick={() => handleVideoClick(video.videoId)}
          >
            <div>
              <iframe
                title={video.title}
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${video.videoId}`}
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
