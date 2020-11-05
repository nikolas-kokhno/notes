const initState = {
    isLoading: false,
    isLoadingNotification: false,
    items: [],
    errors: []
}

const projects = (state = initState, action) => {
    switch (action.type) {
        case 'GET_PROJECTS': {
            return {
                ...state,
                errors: [],
                isLoading: true
            }
        }
        case 'SET_PROJECTS_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }
        }
        case 'SET_PROJECTS_FAILURE': {
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            }
        }
        case 'POST_PROJECT': {
            return {
                ...state,
                errors: [],
                isLoadingNotification: true
            }
        }
        case 'ADD_PROJECT_SUCCESS': {
            return {
                ...state,
                isLoadingNotification: false,
                items: [...state.items, action.payload]
            }
        }
        case 'ADD_PROJECT_FAILURE': {
            return {
                ...state,
                isLoadingNotification: false,
                errors: action.payload
            }
        }
        case 'UPDATE_PROJECT': {
            return {
                ...state,
                errors: [],
                isLoadingNotification: true
            }
        }
        case 'UPDATE_PROJECT_SUCCESS': {
            return {
                ...state,
                isLoadingNotification: false
            }
        }
        case 'UPDATE_PROJECT_FAILURE': {
            return {
                ...state,
                errors: action.payload,
                isLoadingNotification: false
            }
        }
        case 'DELETE_PROJECT': {
            return {
                ...state,
                errors: [],
                isLoadingNotification: true
            }
        }
        case 'DELETE_PROJECT_SUCCESS': {
            return {
                ...state,
                items: [...state.items.filter(item => item._id !== action.payload)],
                isLoadingNotification: false
            }
        }
        case 'DELETE_PROJECT_FAILURE': {
            return {
                ...state,
                errors: action.payload,
                isLoadingNotification: false
            }
        }
        default: {
            return state
        }
    }
}

export default projects;