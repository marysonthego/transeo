import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

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

const container = document.getElementById('App');

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(<App tasks={taskList} tab="home" />);

//ReactDOM.render(<App Tasks={tasks}/>, document.getElementById('root'));

registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
