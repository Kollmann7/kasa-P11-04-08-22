import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Gallery from './Gallery';

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
const gallery = ReactDOM.createRoot(document.getElementById('gallery'))
gallery.render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
