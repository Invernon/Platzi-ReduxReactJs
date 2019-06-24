import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as userActions from '../../../actions/userActions';

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
      <div className="Margen">
        <table className="Table">
          <thead>
            <tr>
              <th>
                Nombre
            </th>
              <th>
                Correo
            </th>
              <th>
                Enlace
            </th>
            </tr>
          </thead>
          <tbody>
            {this.placeRow()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
    return reducers.userReducer;
}

export default connect( mapStateToProps , userActions )(Users);