import { Schema, model, type Document } from 'mongoose';

type TestDocument = Document & {
  test: string;
};

const testSchema = new Schema<TestDocument>({
  test: {
    type: String,
    required: true,
    default: 'test',
  },
});

export default model<TestDocument>('Test', testSchema);
