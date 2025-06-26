const jwt = require('jsonwebtoken');
const {JWT_ENGINEER_PASSWORD} =  require('../config.js');


function engineerMiddleware(req,res,next){
    const token = req.body.token;
    const decoded = jwt.verify(token, JWT_ENGINEER_PASSWORD);
    if(decoded){
        req.engineerId = decoded.id;
        next();
    }
    else{
        res.status(303).json({
            message : "you are not signed in lad."
        })
    }
}

module.exports = {
    engineerMiddleware
}