const jwt = require('express');
const {JWT_MANAGER_PASSWORD} =  require('../config.js');
function managerPassword(req,res,next){
    const token = req.body.token;
    const decoded = jwt.verify(token, JWT_MANAGER_PASSWORD);
    if(decoded){
        req.managerId = decoded.id;
    }
    else{
        res.status(303).json({
            message : "you are not signed in brother"
        })
    }
}

module.exports = {
    managerPassword
}