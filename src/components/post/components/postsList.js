import React from 'react';

const PostsList = (props) => {

    const list = () => {
        props.posts.map( post => {
            return(
                <li> 
                    <b> { post.title } </b> <br/> 
                    <p> { post.body } </p>
                 </li>
            )
        })
    }

    return(
        <ul>
            { list() }
        </ul>
    )


}

export default PostsList;