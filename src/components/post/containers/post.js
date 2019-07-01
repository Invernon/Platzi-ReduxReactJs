import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingContainer from '../../loader/containers/loader';
import * as userActions from '../../../actions/userActions';
import * as postActions from '../../../actions/postActions';
import HandleError from '../../error/containers/handleError';
import RegularError from '../../error/components/regular-error';
import PostsList from '../components/postsList';

// Se restructura las funciones que se encuentran en el Reducer, como ambas se llamaban getAll,
// se segmentan.
const { getById: getUserById } = userActions;
const { getAll: getAllUsers } = userActions;
const { getByUser: getPostsByUser } = postActions;

class Post extends Component {

    async componentDidMount() {

        // Restructurar las funciones y las llamadas para que no sean tan largas.
        // No se pueden restructurar los Reducers. 
        const {
            getAllUsers,
            getUserById,
            getPostsByUser,
            match: { params: { key } }
        } = this.props; // De aca es de donde deriban todas las funciones superiores
        // this.props.getAllUsers(); Ex.

        if (!this.props.userReducer.users.length) {
            // console.log("No hay usuarios, los traigo");
            await getAllUsers();
        }

        //Await para que se espere y primero consigo el usuario por ID y luego busco sus posts
        await getUserById(key);

        if ( this.props.userReducer.error ) {
           return;
        }

        if ( !('post_key' in this.props.userReducer.users[key - 1]) ) {
            getPostsByUser(key);
        }

    }
    
    displayUsers = () => {

        const {
            match: { params: { key } },
            userReducer,
        } = this.props;

        if( userReducer.error ){
            return(
                <RegularError />
            )
        }

        return(
            <LoadingContainer loading = { userReducer.loading || !userReducer.users.length } >
                    <h1> Publicaciones de { userReducer.user.name} [ { userReducer.user.username} ] </h1>
                    <h2> ID: {this.props.match.params.key} </h2>
            </LoadingContainer>
        )
    } 
    
    displayPosts = () => {

        // Destructurar
        const {
            match: { params: { key } },
            userReducer,
            userReducer: { users },
            postReducer,
            postReducer: { posts },
        } = this.props;
        
        
        if( !users.length ) return;
        if( userReducer.error ) return;
        if( !posts.length ) return;
        // if ( !('post_key' in users[key]) ) return;
        
        console.log(posts);

        return posts[0].map( (publish) => (
            <div> 
                <h2> <b> {publish.title} </b> </h2>
                <p> {publish.body} </p>
            </div>
        ))

        // return(
        //     <LoadingContainer loading = { postReducer.loading } >
        //             <h2> Lista de publicaciones </h2>
        //             { this.postsList(posts[users[key] ]) }
        //             {/* <PostsList posts = { posts[ users[key] ] } > </PostsList> */}
        //     </LoadingContainer>
        // )
    }


    
    render() {

        return (
            <div>
                { this.displayUsers() }
                { this.displayPosts() }
            </div>
        )
    }
}


// Multiple Reducers
const mapStateToProps = ({ userReducer, postReducer }) => {
    return {
        userReducer,
        postReducer
    };
}

// Multiple Dispatch
const mapDispatchToProps = {
    getUserById,
    getPostsByUser,
    getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);