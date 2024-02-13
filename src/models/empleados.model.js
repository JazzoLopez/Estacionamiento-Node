import {Schema, model} from "mongoose";
const empleadoSchema = new Schema({
    id_empleado:{
        type: Number,
        required: true,
        unique: true
    },
    nombre:String,
    direccion:String,
    telefono:String,
    correo:String,
    usuario:String,
    contrasena:String
},{
    versionKey:false,
    timestamps:true
})