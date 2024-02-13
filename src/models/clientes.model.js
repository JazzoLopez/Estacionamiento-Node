import {model, Schema} from "mongoose"

const clientesSchema = new Schema({
    id_cliente:{
        type: Number,
        required: true,
        unique: true
    },
    nombre:String,
    direccion:String,
    telefono:String,
    correo:String
},{
    versionKey:false,
    timestamps:true
})

export default model('Cliente',clientesSchema);