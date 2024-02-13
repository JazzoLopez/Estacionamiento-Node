import {Schema, model} from 'mongoose';
const registroSchema = new Schema({
    id_registro:{
        type: Number,
        required: true,
        unique: true
    },
    id_vehiculo:{
        type: Number,
        required: true
    },
    id_cajon:{
        type: Number,
        required: true
    },
    fecha_entrada:Date,
    hora_entrada:Date,
    fecha_salida:Date,
    hora_salida:Date,
    id_empleado:{
        type: Number,
        required: true
    },
    id_tarifa:{
        type: Number,
        required: true
    },
},{
    versionKey:false,
    timestamps:true
})