import { model, Schema } from 'mongoose'; 

const TaskSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    project_id: {
        required: true,
        type: String
    },
    status: {
        type: Boolean,
        default: false
    }
});

export const TaskModel = model('Task', TaskSchema);