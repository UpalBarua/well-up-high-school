import { Schema, model, type Document } from "mongoose";

type VideoDocument = Document & {
  title: string;
  url: string;
  thumbnail: string;
};

const VideoSchema = new Schema<VideoDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Video = model<VideoDocument>("video", VideoSchema);
export default Video;
