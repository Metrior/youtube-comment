import React, {Component} from 'react';
import CommentsBlock from "./CommentsBlock";
import like from "../pictures/like.png";
import dislike from "../pictures/dislike.png";
// import {randomColor} from '../../utils/randomColor';

class SingleComment extends Component {

    onClick = (e) => {
        e.preventDefault();
        return <CommentsBlock/>
    };

    addLike = (e) => {
        e.preventDefault();
        this.props.addLike(this.state.like);
    };

    addDislike = (e) => {
        e.preventDefault();
        this.props.addDislike(this.state.dislike);
    };

    render() {
        const { comment } = this.props;
        return (
            <li key={comment.id}>
                <div className="avatar" style={{background: "green"}}>{comment.name[0].toUpperCase()}</div>
                <div className="name">{comment.name}</div>
                <div className="message">{comment.message}</div>
                <div onClick={this.addLike} className="like"><img src={like} alt=""/></div>
                <div onClick={this.addDislike} className="like"><img src={dislike} alt=""/></div>
                <button onClick={this.onClick}>Reply
                </button>
            </li>
        )
    }
}

export default SingleComment;