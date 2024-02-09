import {model, Schema} from "mongoose"

const cajonesSchema = new Schema({
    id_cajon:{
        type: Number,
        required: true
    },
    numero:Number,
    estatus:Boolean
},{
    timestamps:true,
    versionKey:false
})

export default model('Cajon',cajonesSchema)

// Path: src/models/clientes.model.js