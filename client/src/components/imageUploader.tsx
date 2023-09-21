import { uploadFile } from "@/lib/upload-file";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "./CustomButton";

interface Image {
  name: string;
  url: string;
}

const ImageUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setimageUrl] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Image>();

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (file) {
      try {
        const url = await uploadFile(file);
        console.log("Uploaded Successfully", url);
        setimageUrl(url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleAddImage: SubmitHandler<Image> = (data) => {
    // const name = data.name;
    // if (imageUrl && typeof imageUrl === "string") {
    //   const imageInfo = {
    //     name,
    //     imageUrl,
    //   };
    //   try {
    //     axios.post("/images", imageInfo).then((res) => {
    //       console.log(res.data);
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  };

  return (
    <div className="my-12 max-w-md mx-auto p-6 bg-white rounded shadow-lg">
      <form onSubmit={handleSubmit(handleAddImage)}>
        <h2>Add Image</h2>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Type your image name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
        />
        <input
          className="py-4"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <CustomButton
          onClick={handleUpload}
          className="py-0 bg-gray-600 hover:bg-gray-800"
        >
          Upload
        </CustomButton>

        <button
          type="submit"
          className="px-12 rounded-lg py-1 bg-green-400 text-white block mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUploader;
