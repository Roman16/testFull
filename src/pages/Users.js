import React, {Component} from 'react';
import axios from 'axios';

import Userslist from '../components/UsersList'

class Users extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({users: res.data});
            })
            .catch(error => {
                console.error(error)
            });
    };


    render() {
        return (
            <div className='users-page'>
                <Userslist users={this.state.users}/>
            </div>
        )
    };
}

export default Users;
