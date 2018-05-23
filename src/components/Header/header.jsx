import React, { Component } from 'react';

import NavigationBar from './../NavigationBar/navigationBar'

import './header.css'

export default class Header extends Component {
    render () {
        return (
          <div ClassName="header">
            <NavigationBar />
          </div> 
        )
    }
}