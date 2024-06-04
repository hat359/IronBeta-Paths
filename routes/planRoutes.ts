import { Router } from 'express';
import {
    getPaths,
    getPathById,
    addPath,
    updatePath,
    deletePath,
    addCourseToPath,
    PDFgen
  } from '../controllers/planController'

const router = Router();

router.get('/paths', getPaths);
router.get('/paths/pdf', PDFgen);

router.get('/paths/:id', getPathById);
router.post('/paths', addPath);
router.post('/addpath/:id', addCourseToPath);
router.put('/paths/:id', updatePath);
router.delete('/paths/:id', deletePath);


export default router;