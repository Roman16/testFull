import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';

import { Authentication } from './routes'



render(
    <HashRouter>
            <Authentication />
    </HashRouter>, document.getElementById('root'));

