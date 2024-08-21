import { Types } from "mongoose"

export interface OfficeInterface {
    _id?: Types.ObjectId; 
    name :string;
    email:string;
    phone:string;
    address ? :string | null;
    logoUrl? : string;
    isActive : boolean;
    isSubscribed? : boolean;
    userCount? : number;
    slogan? : string;

}