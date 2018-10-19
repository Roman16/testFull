import React, {Component} from 'react';
import axios from 'axios';
import logo from '../media/logo.png';
import '../scss/login.scss';

class Login extends Component {
    state = {
        login: '',
        pass: '',
    };

    login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/sign_up', {
            login: this.state.login,
            password: this.state.pass
        })
            .then(res => {
                res.data.auth_key ? this.props.history.push('/home') : console.error('`)')
            })
            .catch(error => {
                console.log(error);
            });
    };

    changeEmail = (event) => {
        this.setState({login: event.target.value})
    };

    changePass = (event) => {
        this.setState({pass: event.target.value})
    };

    render() {
        return (
            <div className="login-page">
                <div className="form-signin mx-auto">
                    <img src={logo} alt=""/>
                    <div className='mb-2'>
                        <input type="text"
                               className="form-control"
                               placeholder="Login"
                               value={this.state.login}
                               onChange={this.changeEmail}
                        />
                    </div>
                    <div>
                        <input type="password"
                               className="form-control"
                               placeholder="Password"
                               value={this.state.pass}
                               onChange={this.changePass}
                        />
                    </div>
                    <div className="d-flex justify-content-around mt-5">
                        <button className="btn btn-dark btn-lg" type="button" onClick={this.login}>Sign in</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
