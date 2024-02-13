import app from './app.js';
import db from './db.js';

const port = 3100;

app.listen(port, () => { 
   console.log(`Server running on port ${process.env.SERVER_PORT}`)
});