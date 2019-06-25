import React from 'react';


const UserTable = ( props ) => {
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
            { props.usersData }
          </tbody>
        </table>
    )
}

export default UserTable;