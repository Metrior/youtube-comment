import React from 'react';
import CommentsBlock from "./CommentsBlock";
// import {randomColor} from '../../utils/randomColor';

const SingleComment = (props) => {

    return(
        <li key={props.id}>
            <div className="avatar" style={{background: "green"}}>{props.name[0].toUpperCase()}</div>
            <div className="name">{props.name}</div>
            <div className="message">{props.message}</div>
            <button onClick={(e) => {
                e.preventDefault();
                return <CommentsBlock/>
            }}>Reply</button>
        </li>
    )
};

export default SingleComment;