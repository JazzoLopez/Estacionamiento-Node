import cajonSchema from '../models/cajones.model.js';
const cajonDao={}

cajonDao.insertOne= async (cajon)=>{
    const Cajon = new cajonSchema(cajon);
    await cajon.save();
}

export default cajonDao;