import React, { Component } from 'react';

import Clock from './Clock/clock.js'
// import Toggle from './Button/button.js'
import LogginButton from './Login/login.js'
import Comment from './Comment/comment';
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Clock />
                <LogginButton />
                <Comment name="James" />
                <Comment id="Comment-2" name="Amira" />
            </div>
        );
    }
}