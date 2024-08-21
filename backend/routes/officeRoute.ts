import { Router } from 'express';
import { getAllOffice, createOffice } from '../controllers/officeController';


const officeRouter = Router();

// Define route
officeRouter.get('/fetch', getAllOffice);

//crate office


officeRouter.post('/create', createOffice);

















export default officeRouter;