const Task = require("../models/Task");

const getAlltasks = async (req, res) => {
    try {
        const AllTask = await Task.find({});
        res.status(200).json(AllTask);
    } catch (err) {
        res.status(500).json(err);
    }
}

const Createtacks = async (req, res) => {
    try {
        const createTask = await Task.create(req.body);
        res.status(200).json(createTask);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getSingletask = async (req, res) => {
    try {
        const SingleTask = await Task.findOne({ _id: req.params.id });
        res.status(200).json(SingleTask);
        if (!SingleTask) {
            return res.status(404).json(`_id:${req.params.id}は存在しません`)
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const Updatetask = async (req, res) => {
    try {
        const updateTask = await Task.findOneAndUpdate({ _id: req.params.id },
            req.body, {
            new: true
        });
        res.status(200).json(updateTask);
        if (!updateTask) {
            return res.status(404).json(`_id:${req.params.id}は存在しません`)
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const Deltetask = async (req, res) => {
    try {
        const dleteTask = await Task.findOneAndDelete({ _id: req.params.id },
            req.body);
        res.status(200).json(deleteTask);
        if (!deleteTask) {
            return res.status(404).json(`_id:${req.params.id}は存在しません`)
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
module.exports = {
    getAlltasks,
    Createtacks,
    getSingletask,
    Updatetask,
    Deltetask
}
