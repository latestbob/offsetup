import { Router } from 'express';
import { createDepartment , getDepartments, updateDepartment, deleteDepartment} from '../controllers/departmentController';
import { validateDepartment, updateMiddleware } from '../middlewares/validaeDepartments';



const departRouter = Router ();


//create department

departRouter.post('/create', validateDepartment, createDepartment); //sudo admin

//get departments in an office

departRouter.get('/office/:uuid', getDepartments); 

//update department   //sudo admin

departRouter.put('/:id',updateMiddleware, updateDepartment);

//delete department // sudo admin

departRouter.delete("/:id", deleteDepartment);



export default departRouter;