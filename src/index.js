import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/Clock/Clock';
import registerServiceWorker from './registerServiceWorker';

function tick() {
    ReactDOM.render(
    <Clock date = {new Date()}/>, 
    document.getElementById('root')
    );
    registerServiceWorker();
}

setInterval(tick, 1000);