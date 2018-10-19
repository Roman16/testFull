import React from 'react';

const UsersList = (props) => {
    return (
        <table className="table table-sm table-hover w-100 mb-0">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
            </tr>
            </thead>
            <tbody>
            {props.users.map((user, index) => {
                return (
                    <tr key={user.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{`${user.address.city},  ${user.address.street}`}</td>
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    )


};

export default UsersList;