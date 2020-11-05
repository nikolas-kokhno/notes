import axios from 'axios';

const baseURL = 'http://localhost:4444/api';

export const setProjects = (items) => ({
    type: 'SET_PROJECTS',
    payload: items
});

export const fetchProjects = () => (dispatch) => {
    axios.get(`${baseURL}/projects`)
        .then(({ data }) => {
            dispatch(setProjects(data));
        }
    )
};