import React, { Component } from 'react';

import NavigationBar from './NavigationBar/navigationBar'

export default class Header extends Component {
    render () {
        return (
          <div ClassName="Header">
            <NavigationBar />
          </div> 
        )
    }
}