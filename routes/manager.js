const Router = require('express');
const managerRouter = Router();

managerRouter.post('/signup', (req, res)=>{
    res.json({
        message : "signup"
    })
})


managerRouter.post('/signin', (req,res)=>{
    res.json({
        message : "signin"
    })
})

module.exports = managerRouter;