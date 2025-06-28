const Router = require('express');
const {engineerModel} = require('../db.js');
const engineerRouter = express.Router();
const jwt = require('jsonwebtoken');
const {JWT_ENGINEER_PASSWORD} = require('../config.js');
userRouter.post('/signup', async (req, res)=>{
    try{
    const {email, password, firstName, lastName} = req.body;
    await engineerModel.create({
        email: email, 
        password : password,
        firstName : firstName, 
        lastName : lastName
    })
    res.json({
        message : "SignUp successfull"
    })
    }
    catch(err){
        console.log("Error while sigining up", err);
    }
})
userRouter.post('/signin', async (req,res)=>{
    try{
        const {email, password} =  req.body;
        const user = await engineerModel.findOne({
            email : email,
            password : password
        })
        if(user){
            const token = jwt.sign({
                id : user._id
            }, JWT_ENGINEER_PASSWORD);
            res.json({
            token : token
        })
        }
        else{
            res.status(303).json({
                message : "you have entered wrong credentials"
            })
        }
    }
    catch(err){
        console.log("Error while trying this thing", err);
    }
    res.status(505).json({message : "interal server issue while fetching your data"})
})

module.exports = engineerRouter;