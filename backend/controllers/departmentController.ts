import {Request, Response} from 'express';
import departModel from '../models/departmentModel';
import { DepartInterface } from '../interfaces/departInterface';
import officeModel from '../models/officeModel';
import { validationResult } from 'express-validator';


export async function createDepartment(req:Request<{},{}, DepartInterface>, res:Response){

   
   const errors = validationResult(req);


   if(!errors.isEmpty()){
        return res.status(400).json({
            status:"failed",
            error: errors.array(),
        });
   }
   
    const {name, branch, office_uuid} = req.body;


    try {
        // check if office with such id exists
        const exist = officeModel.findOne({uuid:office_uuid});

        if(!exist){
            return res.status(400).json({
                status:"failed",
                error:` Office with uuid of ${office_uuid} not found`
            });
        }

        
        const depart = new departModel(req.body);
        
        await depart.save();

        return res.status(200).json({
            status:"success",
            "department":depart,
        });




        
    } catch (error) {
        console.error(error);
        
    }

}


