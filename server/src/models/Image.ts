import { Schema, model, type Document } from "mongoose";

type imageDocument = Document & {
  name: string;
  url: string;
};
const ImageSchema = new Schema<imageDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const Image = model<imageDocument>("image", ImageSchema);
export default Image;
