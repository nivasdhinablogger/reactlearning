import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Info/App';


let root2=<React.StrictMode><App /></React.StrictMode>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(root2);

