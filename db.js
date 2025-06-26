const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const engineerSchema = new Schema();
const managerSchema = new Schema();
const tasksSchema = new Schema();


const engineerModel = mongoose.model('engineer', engineerSchema);
const managerModel = mongoose.model('manager', managerSchema);
const tasksModel = mongoose.model('tasks', tasksSchema);

module.exports = {
    engineerModel, 
    managerModel, 
    tasksModel
}