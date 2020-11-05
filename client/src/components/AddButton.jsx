import React from 'react';
import { Button, Modal, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddButton = () => {
    const [visible, setVisible] = React.useState(false);

    const submitModal = () => {
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
                onCancel={() => setVisible(false)}
                footer={[
                    <Button
                        key="back" 
                        onClick={() => setVisible(false)}
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
                <Input placeholder="Start typing here to create a project..." />
            </Modal>
        </>
    )
}

export default AddButton;