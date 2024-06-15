import mongoose, { Schema, Document } from 'mongoose';

// Define the ICourse interface for the subdocument
export interface ICourse {
  courseId: mongoose.Types.ObjectId;
  grade: string; // Possible values: "9th", "10th", etc.
  courseCategory:string
}

// Define the main interface
export interface IPath extends Document {
  userId: mongoose.Types.ObjectId;
  courses: ICourse[];
  createdOn: Date;
  updatedOn: Date;
}

// Define the schema for the course subdocument
const CourseSchema: Schema = new Schema({
  courseId: { type: Schema.Types.ObjectId, required: true },
  grade: { type: String, required: true },
  courseCategory:{type:String, required:true}
});

// Define the main schema
const PathSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true }, // User ID from another service
  courses: [CourseSchema], // Embed the CourseSchema as an array
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
});

// Create a pre-save hook to update the `updatedOn` field
PathSchema.pre<IPath>('save', function (next) {
  this.updatedOn = new Date();
  next();
});

export default mongoose.model<IPath>('Path', PathSchema);
