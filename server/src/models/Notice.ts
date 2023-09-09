import { Schema, model, Document } from "mongoose";

interface INotice extends Document {
  title: string;
  description: string;
  pdfLink: string;
  postedDate: Date;
  expiryDate: Date;
  author: string;
  tags: string[];
  status: string;
  relatedLinks: {
    title: string;
    url: string;
  }[];
}

const noticeSchema = new Schema<INotice>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pdfLink: {
      type: String,
      required: true,
    },
    postedDate: {
      type: Date,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    relatedLinks: [
      {
        title: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Notice = model<INotice>("Notice", noticeSchema);

export default Notice;
