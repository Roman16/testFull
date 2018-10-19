import React, {Component, Fragment} from 'react';
import {Navigation} from '../routes';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className='d-flex content'>
                    <Navbar/>

                    <div className="tab-content">
                        <Navigation/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
