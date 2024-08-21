import { Router } from 'express';
import { getAllOffice, createOffice } from '../controllers/officeController';
import { validateOffice } from '../middlewares/validateOffice';

const officeRouter = Router();

// Define route
officeRouter.get('/fetch', getAllOffice);

//crate office


officeRouter.post('/create',validateOffice, createOffice);

















export default officeRouter;