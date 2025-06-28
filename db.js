const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const engineerSchema = new Schema({
    email: {type: String, unique: true},
    password : String,
    firstName : String,
    lastName :  String
});
const managerSchema = new Schema({
    email: {type: String, unique: true},
    password : String,
    firstName : String,
    lastName :  String
});
const tasksSchema = new Schema();
const engineerModel = mongoose.model('engineer', engineerSchema);
const managerModel = mongoose.model('manager', managerSchema);
const tasksModel = mongoose.model('tasks', tasksSchema);

module.exports = {
    engineerModel, 
    managerModel, 
    tasksModel
}