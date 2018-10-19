import React from 'react';

const CustomersList = (props) => {
    return (
        <table className="table table-sm table-hover w-100 mb-0">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Ip address</th>
            </tr>
            </thead>
            <tbody>
            {props.customers.map((customer, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{customer.name}</td>
                        <td>{customer.username}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.address}</td>
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    )


};

export default CustomersList;