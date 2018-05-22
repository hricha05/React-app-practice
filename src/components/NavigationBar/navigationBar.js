import React, { Component } from 'react';

import './navigationBar.css'

export default class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar">
                <ul className="nav-bar">
                    <li id=""><a href="#">home</a></li>
                    <li id=""><a href="#">about</a></li>
                    <li id=""><a href="#">contact</a></li> 
                </ul>
            </div>
        )
    }
}