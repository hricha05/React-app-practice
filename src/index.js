import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/Clock/clock';
import registerServiceWorker from './registerServiceWorker';

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello World, {this.props.name}</h1>
//     }
// }

// function Welcome (props) {
//     return <h1>Hello, {props.name}</h1>
// }

// function App() {
//     return (
//         <div>
//             <Welcome name="Amira"/>
//             <Welcome name="Alika"/>
//             <Welcome name="Alannah"/>
//         </div>
//     )
// }

// const element = <Welcome name ="Sara" />;
function tick() {
    ReactDOM.render(
    <Clock date = {new Date()}/>, 
    document.getElementById('root')
    );
    registerServiceWorker();
}

setInterval(tick, 1000);