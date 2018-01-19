import React, { Component } from 'react';

export default class LogginButton extends Component {
    // This syntax ensures `this` is bounf within handleClick.
    // Warning: this is *experimental* syntax.

    handleClick = () => {
        console.log('this is: ', this);
    }

    render() {
        return (
            <button onClick={this.handleClick} >
                Login
            </button>
        );
    }
}