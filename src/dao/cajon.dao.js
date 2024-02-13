import cajonSchema from '../models/cajones.model.js';
const cajonDao={}

cajonDao.insertOne= async (cajon)=>{
    const CajonSaved = new cajonSchema(cajon);
    await CajonSaved.save();  
}

export default cajonDao;