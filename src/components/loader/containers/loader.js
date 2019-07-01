import React , { Component} from 'react';
import LoaderDefault from '../components/loaderDefault';
import HandleError from '../../error/containers/handleError';

class LoaderContainer extends Component {

    render(){
        
            if( this.props.loading ){
                return(
                    <LoaderDefault />
                ) 
            }

            return (   
                this.props.children
            )
        
    }

}

export default LoaderContainer;