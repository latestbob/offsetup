import mongoose from 'mongoose';
import { Request, Response } from 'express';
import officeModel from '../models/officeModel';
import { OfficeInterface } from '../interfaces/officeInterface';

export async function getAllOffice(req : Request, res : Response){


    let offices : OfficeInterface[];

    try {

        offices = await officeModel.find();

        res.status(200).json({
            "status":"success",
            "offices" : offices
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            "status":"failed",
            "message":error,
        });
    }




}


//create office

export async function createOffice(req :Request<{}, {}, OfficeInterface>, res:Response){

    const {name, email, phone, slogan} = req.body;
        try {

            //check if office name already exists using their email and name


            const office =  new officeModel({
                name,
            });
            
            await office.save();

            return res.status(200).json({
                "status":"success",
                "office":office,
            });
            
        } catch (error) {
            console.error(error);

            return res.status(400).json({
                "status":"success",
                "message":"An error occurred while creating an office"
            });
        }
}