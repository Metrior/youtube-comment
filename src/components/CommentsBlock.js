import React, {Component} from "react";
import CommentInput from "./CommentInput"
import Comments from "./Comments"
import {connect} from "react-redux";
import {sendComment,addLike,addDislike} from "../actions/index"

class CommentsBlock extends Component{

    render(){
        return(
            <div>
                <CommentInput/>
                <Comments comments={this.props.Comments}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Comments: state.commentsReducer,
        Like: state.likeReducer,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        sendComment: (comment)=>dispatch(sendComment(comment)),
        addLike: (comment)=>dispatch(addLike(comment)),
        addDisike: (comment)=>dispatch(addDislike(comment))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsBlock);