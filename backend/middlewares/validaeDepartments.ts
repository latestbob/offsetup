import { body, validationResult } from 'express-validator';




export const validateDepartment = [
    body('name').isString().withMessage("Department name must be string").notEmpty().withMessage("Department name is required"),
    body('office_uuid').isString().withMessage("office_uuid must be string").notEmpty().withMessage("office_uuid is required"),
    body('branch').optional().isString().withMessage("branch must be a string"),
    
]