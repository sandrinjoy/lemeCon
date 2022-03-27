import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Sign from './comp/Login';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

ReactDOM.render(

  <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
>
  <BrowserRouter><App /></BrowserRouter>,
</ThemeProvider>,
document.getElementById('root')
);
