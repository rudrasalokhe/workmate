const Router = require('express');
const managerRouter = Router();
const {managerModel} = require('../db.js');
const {JWT_MANAGER_PASSWORD} = require('../config.js');
const jwt = require('jsonwebuser');
const { json } = require('body-parser');
managerRouter.post('/signup', async (req, res)=>{
    try{
        const {email, password, firstName, lastName} = req.body;
        await managerModel.create({
            email : email, 
            password : password,
            firstName : firstName, 
            lastName : lastName
        })
        res.json({
            message : "You are singed up"
        })
    }
    catch(err){
        console.log("Error while sigining up" ,err);
    }
})


managerRouter.post('/signin', async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await managerModel.findOne({
            email: email,
            password : password
        })
        if(user){
            const token = jwt.sign({
                user : user._id
            },JWT_MANAGER_PASSWORD);
            res.json({token : token})
        }
        else{
            res.json({message : "Error while sigining in"})
        }
    }
    catch(err){
        console.log("Error", err);
    }
    res.status(505).json({message : "error in the internal server"})
})

module.exports = managerRouter;