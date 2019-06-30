import axios from 'axios';
import { GET_BY_USER, LOADING, ERROR } from '../types/postTypes'

// Nunca se traeran todas las publicaciones. 
// export const getAll = () => async ( dispatch ) => {

//     dispatch({
//         type: LOADING,
//         payload: true,
//     })

//     try {
//         const res = await axios.get( 'http://jsonplaceholder.typicode.com/posts');
        
//         dispatch({
//             type: GET_ALL,
//             payload: res.data,
//             error: ''
//         })

//     } catch (error) {
//         console.error('Error: ' , error.message );
//         dispatch({
//             type: ERROR,
//             payload: error.message
//         })
//     }
    
// } 


// Se puede acceder al estado desde el Action haciendo uso de getState.
export const getByUser = ( id ) => async ( dispatch , getState ) => {

    // const { users } = getState().userReducer; 

    dispatch({
        type: LOADING,
        payload: true,
    })

    try {
        const res = await axios.get( `http://jsonplaceholder.typicode.com/posts?userId=${id}`);
        
        dispatch({
            type: GET_BY_USER,
            payload: res.data,
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