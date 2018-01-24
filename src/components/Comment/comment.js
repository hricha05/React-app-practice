import React, { Component } from 'react';
import './comment.css';

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="comment-date">
//                 {this.props.date}
//             </div>
//         </div>
//     );
// }

export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <div className="UserInfo">
                    <img className="Avatar" src="" alt=""/>
                    <div className="UserInfo-name">
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
}