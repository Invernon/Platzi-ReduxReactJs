import { GET_ALL , LOADING, ERROR, GET_BY_ID } from '../types/userTypes'

const INITIAL_STATE = {
    users: [],
    user: {},
    loading: false,
    error: ''
};

export default ( state = INITIAL_STATE , action ) => {
    switch ( action.type ) {
        case GET_ALL:
            return { ...state,
                loading:false,
                users: action.payload,
                error:''
            }
        case GET_BY_ID:
            return { ...state,
                loading:false,
                user:action.payload
            }
        case LOADING:
            return { ...state, loading: true };
        
        case ERROR:
            return { ...state, loading: false, error: action.payload };
        default: return state
    }
}