import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

