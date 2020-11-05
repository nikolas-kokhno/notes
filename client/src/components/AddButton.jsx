import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { postProject } from '../store/actions/projects';

const AddButton = () => {
    const [visible, setVisible] = React.useState(false);
    const [project, setProject] = React.useState('');
    const dispatch = useDispatch();

    const submitModal = () => {
        const data = {"name": project}

        dispatch(postProject(data));

        setProject('');
        setVisible(false);
    }

    const closeModal = () => {
        setProject('');
        setVisible(false);
    }

    return (
        <>
            <Button 
                className="app__footer-btn" 
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setVisible(true)}
            >
                Add TODO List
            </Button>
            <Modal
                visible={visible}
                title="Create new project"
                onOk={submitModal}
                onCancel={closeModal}
                footer={[
                    <Button
                        key="back" 
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={submitModal}
                    >
                        Submit
                    </Button>
                ]}
            >
                <Input 
                    placeholder="Start typing here to create a project..."
                    value={project} 
                    onChange={(e) => setProject(e.target.value)}
                />
            </Modal>
        </>
    )
}

export default AddButton;