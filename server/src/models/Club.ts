import { Document, Schema, model } from "mongoose";

type clubDocument = Document & {
  name: string;
  member: number;
  precedent: string;
  vice_precedent: string;
  start_it: Date;
  details: string;
};

const clubSchema = new Schema<clubDocument>({
  name: String,
  member: Number,
  precedent: String,
  vice_precedent: String,
  start_it: Date,
  details: String,
});

const clubModal = model("Club", clubSchema);

export default clubModal;
