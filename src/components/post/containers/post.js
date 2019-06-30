import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as userActions from '../../../actions/userActions';
import * as postActions from '../../../actions/postActions';

// Se restructura las funciones que se encuentran en el Reducer, como ambas se llamaban getAll,
// se segmentan.
const { getById: getUserById } = userActions;
const { getByUser: getPostsByUser} = postActions;

class Post extends Component {

    async componentDidMount(){
        // if( !this.props.userReducer.users.length){
        //     //Await para que se espere y primero consigo el usuario por ID y luego busco sus posts
        // }
        await this.props.getUserById( this.props.match.params.key );
            this.props.getPostsByUser( this.props.match.params.key );
    }

    render(){
        console.log(this.props)
        return (
         <div>
             <h1> Publicaciones de { this.props.userReducer.users.name } [ { this.props.userReducer.users.username } ] </h1>
            { this.props.match.params.key}
         </div>   
        )
    }
}


// Multiple Reducers
const mapStateToProps = ( { userReducer , postReducer} ) => {
    return { 
        userReducer,
        postReducer
    };
  }

// Multiple Dispatch
const mapDispatchToProps = {
    getUserById,
    getPostsByUser
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);