import React, { Component } from 'react';

import Clock from './Clock/clock.js'
import Toggle from './Button/button.js'
import LogginButton from './Login/login.js'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Clock />
                <Toggle className="button-1" />
                <Toggle className="button-2" />
                <Toggle className="button-3" />
                <LogginButton />
            </div>
        );
    }
}