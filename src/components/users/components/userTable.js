import React from 'react';
import { Link } from 'react-router-dom';

const UserTable = ( props ) => {
    
    const placeRow = () => (

      props.users.map((element, key) => {

        return (
          <tr key={element.key}>
            <td> {element.name} </td>
            <td> {element.email} </td>
            <td> {element.website} </td>
            <td>
              <Link to={ `/post/${element.id}`}>
                <div className="eye-solid3 icon"></div>
              </Link>
            </td>
          </tr>
        )
      })
    )

    return(
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
            { placeRow() }
          </tbody>
        </table>
    )
}

export default UserTable;