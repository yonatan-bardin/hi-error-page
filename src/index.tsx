import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { StoreWrapper } from './store/StoreWrapper';
import App from './App';
import './css/index.css';

ReactDOM.render(
    <StoreWrapper>
        <App />
    </StoreWrapper>,
    document.getElementById('root'),
);
