import mongoose from "mongoose";
mongoose.connect(process.env.CONECTION_DB)
.then(db=> console.log('DB is connected'))
.catch(err=> console.log(err));

export default mongoose;