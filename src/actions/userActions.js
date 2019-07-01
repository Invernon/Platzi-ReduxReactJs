import axios from 'axios';
import { GET_ALL, LOADING, ERROR, GET_BY_ID } from '../types/userTypes'

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
            error: ''
        })

    } catch (error) {
        console.error('Error: ' , error.message );
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
    
    
} 

export const getById = (id) => async ( dispatch , getState ) => {

    const { posts } = getState().postReducer;

    dispatch({
        type: LOADING,
        payload: true,
    })

    try {
        const resp = await axios.get( `https://jsonplaceholder.typicode.com/users/${id}`);
        
        const userWithPosts = {
            ...resp.data,
        }

        dispatch({
            type: GET_BY_ID,
            payload: resp.data,
            error: ''
        })

    } catch (error) {
        console.error('Error: ' , error.message );
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
    
    
} 