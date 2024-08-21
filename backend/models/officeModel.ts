import { Schema, model, Document } from 'mongoose';

// Interface defining the structure of a User document
interface IOffice extends Document {
    name: string;
    email: string;
    phone : string;
    address? : string | null;
    logoUrl? : string  | null;
    isActive : boolean;
    isSubscribed? : boolean;
    userCount? : number;
    slogan? : string;
}

// Schema definition for User
const OfficeSchema = new Schema<IOffice>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone : {
        type : String,
        required: true,
    }
    ,

    address : {
        type :String,
        required:false,

    },

    logoUrl : {
        type : String,
        required: false,
    },

    isActive : {
        type : Boolean,
        required : false,
    },

    isSubscribed : {
        type : Boolean,
        required: false,
    },

    userCount : {
        type : Number,
        required : false
    },

    slogan : {
        type : String,
        required : false
    }
});

// Model creation for User
const officeModel = model<IOffice>('Office', OfficeSchema);

export default officeModel;
