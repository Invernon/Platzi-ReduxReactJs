import React , { Component} from 'react';
import LoaderDefault from '../components/loaderDefault';

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