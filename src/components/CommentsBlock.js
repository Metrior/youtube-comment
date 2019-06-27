import React, {Component} from "react";
import CommentInput from "./CommentInput"
import Comments from "./Comments"

class CommentsBlock extends Component{

    render(){
        return(
            <div>
                <CommentInput/>
                <Comments/>
            </div>
        )
    }
}

export default CommentsBlock;