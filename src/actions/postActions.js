import axios from 'axios';
import { GET_BY_USER, LOADING, ERROR } from '../types/postTypes';
import * as userTypes from '../types/userTypes';

const { GET_ALL: GET_ALL_USERS } = userTypes;

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

    const { users } = getState().userReducer;
    const { posts } = getState().postReducer;

    dispatch({
        type: LOADING,
        payload: true,
    })

    try {
        const res = await axios.get( `http://jsonplaceholder.typicode.com/posts?userId=${id}`);

        const updated_posts = [
            ...posts,
            res.data
        ]

        // Useless: 
        const post_key = updated_posts.length - 1;
        const user_pos = id - 1;

        // Update Users - Desde lo que se encuentre en el reducer
        const users_updated = [...users];

        users_updated[user_pos] = {
            ...users[user_pos],
            post_key
        }

        dispatch({
            type: GET_ALL_USERS,
            payload: users_updated
        })
    
        dispatch({
            type: GET_BY_USER,
            payload: updated_posts,
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