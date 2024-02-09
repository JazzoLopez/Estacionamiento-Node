import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/index.router.js';
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.set('views', './src/views');
app.use(express.static('./src/public'));
app.set('view engine', 'ejs');

app.use('/', indexRoute);

export default app;