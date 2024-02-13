import express from 'express';
import morgan from 'morgan';
import cajonRoutes from './routes/cajon.routes.js';
import { config } from 'dotenv';
config();
// import indexRoute from './routes/index.router.js';
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.set('views', './src/views');
app.use(express.static('./src/public'));
app.set('view engine', 'ejs');

// app.use('/login', indexRoute);
app.use('/menu/cajon', cajonRoutes);
export default app;