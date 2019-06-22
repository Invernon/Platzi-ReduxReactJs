import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {

  constructor() {
    super();

    this.state = {
      users: []
    }
  }

  async componentDidMount(){
    const resp = await axios.get( 'https://jsonplaceholder.typicode.com/users') ;
    this.setState({
      users: resp.data
    })
  }

  placeRow = () => (

    this.state.users.map( element => {

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

export default Users;