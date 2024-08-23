import { Router } from 'express';
import { createDepartment , getDepartments} from '../controllers/departmentController';
import { validateDepartment } from '../middlewares/validaeDepartments';



const departRouter = Router ();


//create department

departRouter.post('/create', validateDepartment, createDepartment);

//get departments in an office

departRouter.get('/office/:uuid', getDepartments);



export default departRouter;