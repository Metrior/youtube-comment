import React, {Component} from 'react';
import CommentsBlock from "./CommentsBlock";
import like from "../pictures/like.png";
import dislike from "../pictures/dislike.png";
// import {randomColor} from '../../utils/randomColor';

class SingleComment extends Component {

    render() {
        return (
            <li key={props.id}>
                <div className="avatar" style={{background: "green"}}>{props.name[0].toUpperCase()}</div>
                <div className="name">{props.name}</div>
                <div className="message">{props.message}</div>
                <div className="like"><img src={like} alt=""/></div>
                <div className="like"><img src={dislike} alt=""/></div>
                <button onClick={(e) => {
                    e.preventDefault();
                    return <CommentsBlock/>
                }}>Reply
                </button>
            </li>
        )
    }
}

export default SingleComment;