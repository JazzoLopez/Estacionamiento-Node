import expres from 'express';
import index from '../controllers/user.controller.js';

const router = expres.Router();
router.get('/',(req, res)=>{res.redirect('/login')});
router.get('/login',index.login);   



export default router;