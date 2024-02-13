import {model, Schema} from "mongoose"

const vehiculoSchema = new Schema({
    id_vehiculo:{
        type: Number,
        required: true, 
        unique: true
    },
    matricula:String,
    modelo:String,
    color:String,
    puertas:Number,
    tipo:String,
    id_cliente:Number
},{
    timestamps:true,
    versionKey:false
})


export default model('Vehiculo',vehiculoSchema)