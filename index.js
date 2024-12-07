const app = require('./app');
const CONNECT_DB = require('./config/DB');

require('dotenv').config();

const port = process.env.PORT  || 1618;
const DB_URL = process.env.DB_URI;

app.listen(port,async()=>{
    await CONNECT_DB(DB_URL);
    console.log(`Server is running port http://localhost:${port}`);
});