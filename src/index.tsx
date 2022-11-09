import React from 'react';
import {createRoot} from 'react-dom/client';
import 'material-icons/iconfont/material-icons.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const taskList = [
    { name: 'task 0', stage: 0 },
    { name: 'task 1', stage: 0 },
    { name: 'task 2', stage: 0 },
    { name: 'task 3', stage: 0 },
    { name: 'task 4', stage: 1 },
    { name: 'task 5', stage: 1 },
    { name: 'task 6', stage: 1 },
    { name: 'task 7', stage: 2 },
    { name: 'task 8', stage: 2 },
    { name: 'task 9', stage: 3 },
];

const root = createRoot(document.getElementById('root') as Element);
console.log('root: ', root); // ???
root.render(<App tasks={taskList} tab="home" />);

registerServiceWorker();
