import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, ProjectItem, EmptyData } from '../components';

const ProjectList = () => {
    const projects = useSelector((data) => {
        return data.projects
    });

    console.log(projects.items)

    return (
        <div className="app__projects">
            {projects.isLoading 
                ? <Loader />
                : projects.items.length === 0 
                ? <EmptyData />
                : projects.items && projects.items.map(item => (
                    <ProjectItem 
                        key={item._id}
                        projectData={item} 
                    />
                ))
            }
        </div>
    )
}

export default ProjectList;