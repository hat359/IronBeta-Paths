import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Path from '../models/Path';
import {generatePDF} from '../Utils/PdfGenerator'
// Get all paths
export const getPaths = async (req: Request, res: Response) => {
  try {
    const paths = await Path.find();
    res.status(200).json(paths);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific path by ID
export const getPathById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const path = await Path.findById(id);
    if (!path) {
      return res.status(404).json({ message: 'Path not found' });
    }
    res.status(200).json(path);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get paths for a specific user
export const getPathsByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const paths = await Path.find({ userId: new mongoose.Types.ObjectId(userId) });
    if (paths.length === 0) {
      return res.status(404).json({ message: 'No paths found for this user' });
    }
    res.status(200).json(paths);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Add a new path
export const addPath = async (req: Request, res: Response) => {
  const { userId, courses } = req.body;
  console.log(userId.length)
  try {
    const newPath = new Path({
      userId: userId,
      courses,
      createdOn: new Date(),
      updatedOn: new Date(),
    });
    const savedPath = await newPath.save();
    res.status(201).json(savedPath);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Bad Request' });
  }
};

export const addCourseToPath = async (req: Request, res: Response): Promise<void> => {
  try {
    const pathId = req.params.id; // Assuming 'id' is the parameter for course _id
    const { courseId, grade, courseCategory} = req.body; // Assuming request body contains 'text' and 'user' for the comment

    // Find the path by its _id
    const path = await Path.findById(pathId);

    if (!path) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    path.courses.push({ courseId, grade, courseCategory});
    await path.save();

    res.status(201).json(path); // Return the updated course object
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const PDFgen = async (req: Request, res: Response): Promise<void> => {
  try {
    generatePDF()
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update an existing path by ID
export const updatePath = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, courses } = req.body;
  try {

    const paths = await Path.find({ userId: new mongoose.Types.ObjectId(userId) });
    if (paths.length === 0) {
      return res.status(404).json({ message: 'No paths found for this user' });
    }

    const updatedPath = await Path.findByIdAndUpdate(
      id,
      { userId, courses, updatedOn: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedPath) {
      return res.status(404).json({ message: 'Path not found' });
    }
    res.status(200).json(updatedPath);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Delete a path by ID
export const deletePath = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedPath = await Path.findByIdAndDelete(id);
    if (!deletedPath) {
      return res.status(404).json({ message: 'Path not found' });
    }
    res.status(200).json({ message: 'Path deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
