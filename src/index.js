import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';

//Rutas
import AppRoutes from './routes';
import {  BrowserRouter as Router } from "react-router-dom";


firebase.initializeApp({
    apiKey: "AIzaSyDF9w1-23ocxyfwGFTYfklkbALpKDTrN0s",
    authDomain: "agenda-b98b2.firebaseapp.com",
    databaseURL: "https://agenda-b98b2.firebaseio.com",
    projectId: "agenda-b98b2",
    storageBucket: "agenda-b98b2.appspot.com",
    messagingSenderId: "312795633546" 
});

render(
    <Router>  
        <AppRoutes />
    </Router>,
     document.getElementById('root')
);
registerServiceWorker();
