const Task = require('../models/Task');
const getAlltasks = (req,res) => {
    res.send("get all items")
}
const createtask = async (req,res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
}
const gettask = (req,res) => {
    res.json({id:req.params.id})
}

const updatetask = (req,res) => {
    res.send("update item")
}
const deletetask = (req,res) => {
    res.send("delete item")
}

module.exports = {
    getAlltasks,createtask,gettask,updatetask,deletetask
}