const express = require('express');
const app = express();
const tasks = require('./routes/task.js')
const connectDB = require('./db/connect')
require('dotenv').config()
app.use(express.json())

app.use('/api/v1/tasks',tasks)
const port = 3000;

const start = async ()=>{
    try{
        await connectDB(process.env['MONGO_URL'])
        app.listen(port , console.log(`Server is running at port ${port}...`));
     }
     catch(error){
         console.log(error)
     }
}

start()