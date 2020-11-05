const initState = {
    items: []
}

const projects = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PROJECTS': {
            return {
                ...state,
                items: action.paylod
            }
        }
        default: {
            return state
        }
    }
}

export default projects;