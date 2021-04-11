import 'bootstrap/dist/css/bootstrap.min.css';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = (
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
);

render(
    router,
    document.getElementById('root'),
);

reportWebVitals();
