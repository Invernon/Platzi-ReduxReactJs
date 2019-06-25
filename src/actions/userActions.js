import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/userTypes'

export const getAll = () => async ( dispatch ) => {

    dispatch({
        type: LOADING,
        payload: true,
    })

    try {
        const resp = await axios.get( 'https://jsonplaceholder.typicode.com/users');
        
        dispatch({
            type: GET_ALL,
            payload: resp.data,
        })

    } catch (error) {
        console.error('Error: ' , error.message );
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
    
    
} 