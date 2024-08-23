import { Router } from 'express';
import { createDepartment } from '../controllers/departmentController';
import { validateDepartment } from '../middlewares/validaeDepartments';



const departRouter = Router ();


//create department

departRouter.post('/create', validateDepartment, createDepartment);




export default departRouter;