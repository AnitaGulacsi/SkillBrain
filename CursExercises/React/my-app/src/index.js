import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// This code creates a React root using the createRoot method from the ReactDOM library. 
// The createRoot function is used to create a new root-level React element.
//  In this case, it's looking for an HTML element with the id "root" using document.getElementById('root'). 
// This is typically the DOM element where your React application will be rendered.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//the code you provided sets up a React application by creating a root element and rendering the App component into that root element. 
// The use of <React.StrictMode> helps in development by highlighting potential issues in your code. 
// This is a common structure for initializing a React application.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
