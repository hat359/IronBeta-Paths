import { Request, Response } from 'express';
import Course from '../models/course'; 


export const getCourseByCode = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("course");
    const { code } = req.params;
    console.log(req.params);
    const course = await Course.findOne({courseCode:code});
    console.log(course);
    
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseData= req.body;
    const course = new Course(courseData);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Bad Request' });
  }
};

export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (deletedCourse) {
      res.status(200).json(deletedCourse);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates=req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );

    if (updatedCourse) {
      res.status(200).json(updatedCourse);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const partialUpdateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );

    if (updatedCourse) {
      res.status(200).json(updatedCourse);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
 