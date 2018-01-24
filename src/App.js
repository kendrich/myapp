import React from 'react';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/default.min.css';


import LoginPage from './components/pages/LoginPage';

const App = () => (
    <div> 
        <Route path="/" exact component={LoginPage}/>
    </div>
);

export default App;
