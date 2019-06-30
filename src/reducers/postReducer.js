import { GET_BY_USER , LOADING, ERROR } from '../types/postTypes'

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
};

export default ( state = INITIAL_STATE , action ) => {
    switch ( action.type ) {
        case GET_BY_USER:
            return { ...state,
                loading:false,
                posts: action.payload}
        case LOADING:
            return { ...state, loading: true };
        
        case ERROR:
            return { ...state, loading: false, error: action.payload };
        default: return state
    }
}