import axios from 'axios';

const baseURL = 'http://localhost:4444/api';

export const setProjects = () => ({
    type: 'GET_PROJECTS'
});

export const setProjectsSuccess = (items) => ({
    type: 'SET_PROJECTS_SUCCESS',
    payload: items
});

export const setProjectsFailure = (error) => ({
    type: 'SET_PROJECTS_FAILURE',
    payload: error
});

export const addProject = () => ({
    type: 'POST_PROJECT'
});

export const addProjectSuccess = (project) => ({
    type: 'ADD_PROJECT_SUCCESS',
    payload: project
});

export const addProjectFailure = (error) => ({
    type: 'ADD_PROJECT_FAILURE',
    payload: error
});

export const updateProject = () => ({
    type: 'UPDATE_PROJECT'
});

export const updateProjectSuccess = (data) => ({
    type: 'UPDATE_PROJECT_SUCCESS',
    payload: data
});

export const updateProjectFailure = (error) => ({
    type: 'UPDATE_PROJECT_FAILURE',
    payload: error
});

export const removeProject = () => ({
    type: 'DELETE_PROJECT'
});

export const removeProjectSuccess = (deletedID) => ({
    type: 'DELETE_PROJECT_SUCCESS',
    payload: deletedID
});

export const removeProjectFailure = (error) => ({
    type: 'DELETE_PROJECT_FAILURE',
    payload: error
});

export const fetchProjects = () => (dispatch) => {
    dispatch(setProjects());
    axios.get(`${baseURL}/projects`)
        .then(({ data }) => dispatch(setProjectsSuccess(data.data)))
        .catch(({ data }) => dispatch(setProjectsFailure(data.errors)));
};

export const postProject = (project) => (dispatch) => {
    dispatch(addProject());
    axios.post(`${baseURL}/projects`, project)
        .then(({ data }) => dispatch(addProjectSuccess(data.data)))
        .catch(({ data }) => dispatch(addProjectFailure(data.errors)));
};

export const putProject = (projectID, data) => (dispatch) => {
    dispatch(updateProject());
    axios.put(`${baseURL}/projects/${projectID}`, data)
        .then(({ data }) => dispatch(updateProjectSuccess(data.data)))
        .catch(({ data }) => dispatch(updateProjectFailure(data.errors)));
};

export const deleteProject = (projectID) => (dispatch) => {
    dispatch(removeProject());
    axios.delete(`${baseURL}/projects/${projectID}`)
        .then(({ data }) => dispatch(removeProjectSuccess(data.deletedID)))
        .catch(({ data }) => dispatch(removeProjectSuccess(data.errors)));
};