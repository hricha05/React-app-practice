import React, { Component } from  'react';

export default class Avatar extends Component {
    render() {
        return (
            <img className="Avatar" src={props.user.authorUrl} alt={props.user.name} />
        )
    }
}