import React from 'react'

const Map = () => {
    const users = [
        { firstName: 'SEED', lastName: 'OGUNLETI', age: 100 },
        { firstName: 'SEED', lastName: 'OGUNLETI', age: 100 }
    ]
    return (
        <div style={{backgroundColor:'black'}}>

            <div>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>S/N</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,index)=>(
                           <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                           </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
            
            
            
        </div>
    )
}

export default Map