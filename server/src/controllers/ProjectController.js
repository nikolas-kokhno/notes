import { validationResult } from 'express-validator';
import { ProjectModel } from '../models/ProjectModel';

class ProjectController {
    async index (req, res) {
        try {
            let projects = await ProjectModel.find({}).exec();

            res.status(200).json({
                status: 'success',
                data: projects
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
                name: req.body.name
            };

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            let project = await ProjectModel.create(data);

            res.status(200).json({
                status: 'success',
                data: project
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
            let projectID = req.params.id;

            let project = await ProjectModel.findById({ _id: projectID });

            if (!project) {
                res.status(404).json({
                    status: 'error',
                    message: 'Project not found!'
                });
                return;
            }

            let data = {
                name: req.body.name
            };

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            await ProjectModel.updateOne({ _id: projectID }, data);
            const updatedProject = await ProjectModel.findById({ _id: projectID });

            res.status(200).json({
                status: 'success',
                data: updatedProject
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
            let projectID = req.params.id;

            let project = await ProjectModel.findById({ _id: projectID });

            if (!project) {
                res.status(404).json({
                    status: 'error',
                    message: 'Project not found!'
                });
                return;
            }

            await ProjectModel.deleteOne({ _id: projectID });

            res.status(200).json({
                status: 'success',
                deletedID: projectID,
                message: `Project with ${projectID} deleted successfully.`
            });
        } catch {
            res.status(500).json({
                status: 'error',
                data: error
            });
        }
    }
}

const ProjectCtrl = new ProjectController();
export default ProjectCtrl;