const Router = require('express');
const engineerRouter = express.Router();


userRouter.post('/signup', (req, res)=>{
    res.json({
        message : "signup"
    })
})


userRouter.post('/signin', (req,res)=>{
    res.json({
        message : "signin"
    })
})

module.exports = engineerRouter;