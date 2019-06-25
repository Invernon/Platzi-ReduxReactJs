import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../../actions/userActions';


import HandleError from '../../error/containers/handleError';
import LoadingContainer from '../../loader/containers/loader';
import UserTable from '../components/userTable';

class Users extends Component {

  async componentDidMount(){

    // Aca se llama al actions que esta en mi reducer para traer a todos los usuarios. 
    this.props.getAll();
  }

  placeRow = () => (

    this.props.users.map( element => {

      return (
        <tr key={element.id}>
          <td> {element.name} </td>
          <td> {element.email} </td>
          <td> {element.website} </td>
        </tr>
      )
    })
  )

  render() {
    return (

    <LoadingContainer loading ={ this.props.loading }>
      <div className="Margen">
        <h1> Usuarios </h1>
        <UserTable usersData={ this.placeRow() } />
      </div>
    </LoadingContainer>
    )
  }
}

const mapStateToProps = (reducers) => {
    return reducers.userReducer;
}

export default connect( mapStateToProps , userActions )(Users);