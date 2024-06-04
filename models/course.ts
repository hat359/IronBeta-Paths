import mongoose, { Schema, Document } from 'mongoose';

// Define the attributes sub-schema
const AttributesSchema = new Schema({
  availableCredits: { type: Number, required: true },
  courseLevel: { type: String, required: true },
  maxGPAWeight: { type: Number, required: true },
  courseLength: { type: String, required: true },
  categoryType: { type: String, required: true },
  courseCategory: { type: String, required: true },
  courseSubCategory: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
  state: { type: String, required: true },
  County: { type: String, required: true },
  institution: { type: String, required: true },
  // Add more attributes here as needed in the future
});

// Define the review sub-schema
// const ReviewSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, required: true },
//   reviewText: { type: String, required: true },
//   rating: { type: Number, required: true },
//   createdOn: { type: Date, default: Date.now },
// });

// Define the FAQ sub-schema
// const FaqSchema = new Schema({
//   question: { type: String, required: true },
//   answer: { type: String, required: true },
// });

// Define the main course schema
const CourseSchema: Schema = new Schema({
  courseCode: { type: String, required: true }, // Added courseCode field
  name: { type: String, required: true },
  description: { type: String, required: true },
  attributes: AttributesSchema,
  expiryDate: { type: Date, required: true },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
});

// Define ICourse interface
interface ICourse extends Document {
  courseCode: string; // Added courseCode field
  name: string;
  description: string;
  attributes: {
    availableCredits: number;
    courseLevel: string;
    maxGPAWeight: number;
    courseLength: string;
    categoryType: string;
    courseCategory: string;
    courseSubCategory: string;
    createdOn: Date;
    updatedOn: Date;
    state: string;
    County: string;
    institution: string;
  };
  
  expiryDate: Date;
  createdOn: Date;
  updatedOn: Date;
}

// Export the model
export default mongoose.model<ICourse>('Course', CourseSchema);
