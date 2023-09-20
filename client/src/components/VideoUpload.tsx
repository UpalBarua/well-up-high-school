import axios from "@/api/axios";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Video {
  title: string;
  url: string;
  thumbnail: string;
}

const VideoUpload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Video>();

  const handleAddVideo: SubmitHandler<Video> = (data) => {
    try {
      axios.post("/videos", data).then((res) => {
        if (res.data.status === "Success") {
          toast.success("Video Added Successfully");
        }
      });
    } catch (error) {
      toast.error("Error Creating Video");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add Video</h2>
      <form onSubmit={handleSubmit(handleAddVideo)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Video Title
          </label>
          <input
            {...register("title", { required: "Video title is required" })}
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="url">
            Video URL
          </label>
          <input
            {...register("url", {
              required: "Video URL is required",
            })}
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="thumbnail"
          >
            Video Thumbnail URL
          </label>
          <input
            {...register("thumbnail", {
              required: "Thumbnail URL is required",
            })}
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Video
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
