import React from 'react';
import { render } from 'react-dom';
import ApplicationRoutes from './routes/Routes';
import './index.scss';


render(
    <ApplicationRoutes/>,
    document.getElementById('root')
)