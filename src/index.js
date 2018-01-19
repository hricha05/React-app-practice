import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/Clock/Clock';
import Toggle from './components/Button/button'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Clock />, 
    document.getElementById('root')
);

ReactDOM.render(
    <Toggle />, 
    document.getElementById('root')
);
registerServiceWorker();