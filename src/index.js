import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/Clock/Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Clock />, 
    document.getElementById('root')
);
registerServiceWorker();