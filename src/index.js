import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
