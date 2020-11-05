import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from 'antd';
import { 
    CalendarOutlined,
    EditOutlined, 
    DeleteOutlined,
    PlusOutlined,
    CheckOutlined
} from '@ant-design/icons';
import { deleteProject, putProject } from '../store/actions/projects';
import TaskList from './TaskList';

const ProjectItem = ({ projectData }) => {
    const [edited, setEdited] = React.useState(false);
    const [name, setName] = React.useState(projectData.name);
    const dispatch = useDispatch();

    const updateProject = () => {
        let projectID = projectData._id;
        let data = {"name": name};

        dispatch(putProject(projectID, data));
        setEdited(false);
    }

    const removeProject = () => {
        dispatch(deleteProject(projectData._id));
    }

    return (
        <div className="app__projects-item">
            <div className="project__header">
                <div className="project__header-name">
                    <CalendarOutlined 
                        style={{marginRight: "10px"}} 
                        className="project__header-icon"
                    />
                    {edited ? 
                    <Input 
                        size="small" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    : <span>{name}</span>}
                </div>

                <div className="project__header-options">
                    <div className="project__header-icons">
                        {edited ?
                        <CheckOutlined 
                            className="project__header-icon"
                            onClick={updateProject}
                        />
                        : <EditOutlined 
                            className="project__header-icon"
                            onClick={() => setEdited(true)}
                        />}
                        <DeleteOutlined 
                            className="project__header-icon"
                            onClick={removeProject}
                        />
                    </div>
                </div>
            </div>

            <div className="project__add">
                <div className="project__add-icon">
                    <PlusOutlined />
                </div>

                <div className="project__add-input">
                    <Input 
                        suffix={
                            <Button 
                                type="dashed" 
                                size="small"
                            >
                                Add Task
                            </Button>
                        } 
                    />
                </div>
            </div>

            <div className="project__body">
                <TaskList />
            </div>
        </div>
    )
}

export default ProjectItem;