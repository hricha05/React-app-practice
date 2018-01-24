import React, { Component } from 'react';
import './login.css';

export default class LogginButton extends Component {
    // This syntax ensures `this` is bounf within handleClick.
    // Warning: this is *experimental* syntax.

    handleClick = () => {
        console.log('this is: ', this);
    }

    render() {
        return (
            <div className="login">
                <button className="button"  onClick={this.handleClick} >
                    Login
                </button>
            </div>
        );
    }
}