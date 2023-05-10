import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  "./Todo.css"
import Todo from './Todo';
import Aos from 'aos';

Aos.init(
  {delay:1000, duration:1000}
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

