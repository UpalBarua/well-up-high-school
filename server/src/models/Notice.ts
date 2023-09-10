import { Schema, model, Document } from "mongoose";

type Notice = {
  title: string;
  description: string;
  pdfLink: string;
  postedDate: Date;
  expiryDate: Date;
  author: string;
  tags: string[];
  status: "Draft" | "Published" | "Archived";
  relatedLinks: Array<{
    title: string;
    url: string;
  }>;
};

const noticeSchema = new Schema<Notice>(
  {
    title: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 255,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 2000,
    },
    pdfLink: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => /^(http|https):\/\/[^ "]+$/.test(v),
        message: "Invalid URL format",
      },
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
      enum: ["Draft", "Published", "Archived"],
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
          validate: {
            validator: (v: string) => /^(http|https):\/\/[^ "]+$/.test(v),
            message: "Invalid URL format",
          },
        },
      },
    ],
  },
  { timestamps: true }
);

const NoticeModel = model<Notice>("Notice", noticeSchema);

export default NoticeModel;
