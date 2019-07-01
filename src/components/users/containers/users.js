import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../../actions/userActions';

import LoadingContainer from '../../loader/containers/loader';
import UserTable from '../components/userTable';

class Users extends Component {

  componentDidMount() {

    // Aca se llama al actions que esta en mi reducer para traer a todos los usuarios. 

    if( !this.props.users.length ){
      this.props.getAll();
    }
  }

  render() {
    return (
      <LoadingContainer loading={ this.props.loading }>
        <div className="Margen">
          <h1> Usuarios </h1>
          <UserTable />
        </div>
      </LoadingContainer>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
}

export default connect(mapStateToProps, userActions)(Users);