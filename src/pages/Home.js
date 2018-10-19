import React, {Component} from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import Customerslist from '../components/CustomersList'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

class Home extends Component {
    state = {
        customers: [],
        customer: {
            name: '',
            username: '',
            email: '',
            phone: '',
            address: '',
        },
        modalIsOpen: false
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    componentDidMount() {
        axios.get('http://localhost:8080/customers')
            .then(res => {
                console.log(res.data)
                this.setState({customers: res.data});
            })
            .catch(error => {
                console.error(error)
            });
    }

    create = (event) => {
        event.stopPropagation();

        axios.post('http://localhost:8080/customers', this.state.customer)
            .then(res => {
                console.log(res.data);
                this.setState({customers: [...this.state.customers, this.state.customer]});
            })
            .catch(error => {
                console.log(error)
            });

        this.closeModal();
    };

    delete = (event) => {
        event.stopPropagation();

        axios.delete('http://localhost:8080/customers', { data: { id: "5bc8fcc04ba67f0710d6fa60" }})
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            });

        this.closeModal();
    };



    update = () => {
        axios.put('http://localhost:8080/customers', {id: "5bc8fcc04ba67f0710d6fa60"})
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            });
    };

    onInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({customer: {...this.state.customer, [name]: value}});
    };

    render() {
        return (
            <div className='home-page'>
                <div className='d-flex justify-content-lg-between'>
                    <h1 className='title'>customers:</h1>
                    <button className='btn' onClick={this.openModal}>add customer</button>
                    <button className='btn' onClick={this.update}>update</button>
                    <button className='btn' onClick={this.delete}>delete</button>
                </div>
                <Customerslist customers={this.state.customers}/>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='d-flex'>
                        <h2>New customer</h2>
                        <button onClick={this.closeModal}>X</button>
                    </div>

                    <form>
                        <div className="d-flex flex-column">
                            <input type='text'
                                   placeholder='Name'
                                   name='name'
                                   value={this.state.customer.name}
                                   onChange={this.onInputChange}/>

                            <input type='text'
                                   placeholder='Username'
                                   name='username'
                                   value={this.state.customer.username}
                                   onChange={this.onInputChange}/>

                            <input type='text'
                                   placeholder='Email'
                                   name='email'
                                   value={this.state.customer.email}
                                   onChange={this.onInputChange}/>

                            <input type='text'
                                   placeholder='Phone'
                                   name='phone'
                                   value={this.state.customer.phone}
                                   onChange={this.onInputChange}/>

                            <input type='text'
                                   placeholder='Address'
                                   name='address'
                                   value={this.state.customer.address}
                                   onChange={this.onInputChange}/>
                        </div>
                        <button type='button' onClick={this.create}>create</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default Home;
