require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const engineerRouter = require('../product management/routes/engineer.js');
const managerRouter = require('../product management/routes/manager.js');
const tasksRouter = require('../product management/routes/tasks.js');
app.use(express.json());
app.use('/api/v1/engineer',engineerRouter);
app.use('/api/v1/manager', managerRouter);
app.use('/api/v1/tasks', tasksRouter);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb connected!!");
    app.listen(3000, ()=>{
        console.log("Server running on PORT 3000");
    })
}).catch(err)
    console.log("error connecting to the database", err);
