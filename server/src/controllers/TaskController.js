import { validationResult } from 'express-validator';
import { TaskModel } from '../models/TaskModel';

class TaskController {
    async index (req, res) {
        try {
            let tasks = await TaskModel.find({}).exec();

            res.status(200).json({
                status: 'success',
                data: tasks
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error
            });
        }
    }

    async create (req, res) {
        try {
            let errors = validationResult(req);
            let data = {
                name: req.body.name,
                project_id: req.body.project_id,
            }

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            let task = await TaskModel.create(data);

            res.status(200).json({
                status: 'success',
                data: task
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error
            });
        }
    }

    async update (req, res) {
        try {
            let errors = validationResult(req);
            let taskID = req.params.id;

            let task = await TaskModel.findById({ _id: taskID });

            if (!task) {
                res.status(404).json({
                    status: 'error',
                    message: 'Task not found!'
                });
                return;
            }

            let data = {
                name: req.body.name,
                project_id: req.body.project_id
            }

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            await TaskModel.updateOne({ _id: taskID }, data);

            res.status(200).json({
                status: 'success',
                message: `Task with ${taskID} ID updated successfully.`
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error
            });
        }
    }

    async updateStatus (req, res) {
        try {
            let taskID = req.params.id;

            let task = await TaskModel.findById({ _id: taskID });

            if(!task) {
                res.status(404).json({
                    status: 'error',
                    message: 'Task not found!'
                });
                return;
            }

            let data = {
                name: task.name,
                project_id: task.project_id,
                status: !task.status
            }

            await TaskModel.updateOne({ _id: taskID }, data);

            res.status(200).json({
                status: 'success',
                message: 'Task status updated successfully.'
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error
            });
        }
    }

    async delete (req, res) {
        try {
            let taskID = req.params.id;

            let task = await TaskModel.findById({ _id: taskID });

            if (!task) {
                res.status(404).json({
                    status: 'error',
                    message: 'Task with this ID not found.'
                });
                return;
            }

            await TaskModel.deleteOne({ _id: taskID });

            res.status(200).json({
                status: 'success',
                message: `Task with ${taskID} ID deleted successfully.`
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error
            });
        }
    }
}
const TaskCtrl = new TaskController();
export default TaskCtrl;