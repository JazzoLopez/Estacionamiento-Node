import { Schema, model} from "mongoose";
const tarifaSchema = new Schema({
    id_tarifa:{
        type: Number,
        required: true,
        unique: true
    },
    tarifa:String,
    monto:Number
},{
    versionKey:false,
    timestamps:true
})