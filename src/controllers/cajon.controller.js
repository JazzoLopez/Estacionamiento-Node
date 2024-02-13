import cajonDao from "../dao/cajon.dao.js";

const cajonController = {};

cajonController.insertOne = async (req, res) => {
    cajonDao.insertOne(req.body)
    .then(()=>{
        res.status(200).json({message:"Cajon insertado correctamente"});
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({message:"Error al insertar cajon"});
    });
}

export default cajonController;