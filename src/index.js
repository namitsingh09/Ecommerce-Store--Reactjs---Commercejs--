import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './App';
import reportWebVitals from './reportWebVitals';
import Trenditem from './componenets/Trenditem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div>
<li id='sxx'>
<h1 id='sxx1'>Trending items</h1> <button id='sdf'>View all</button>

</li>
< Trenditem />


    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
