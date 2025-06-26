const {Router} = require("express");
const tasksRouter = Router();


tasksRouter.post('/tasks', (req,res) => {
    res.json({
        message : "tasks to be added"
    })
})


tasksRouter.get('/preview', (req, res)=>{
    res.json({
        message : "all existing tasks"
    })
})