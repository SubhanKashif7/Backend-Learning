import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            default : "AnonyMous"
        },

        issues : {
            type : [],
            required : true
        }

        
    },
    {
        timestamps : true
    }
);

export const Patient = mongoose.model("Patient",PatientSchema);
