import React from 'react'

const Records = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>City</th>

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.id} </td>
                    <td>{item.firstname} </td>
                    <td>{item.lastname} </td>
                    <td>{item.address} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records  