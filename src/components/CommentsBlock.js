import React, {Component} from "react";
import CommentInput from "./CommentInput"
import Comments from "./Comments"
import {connect} from "react-redux";

class CommentsBlock extends Component{

    constructor(props) {
        super(props);
        this.state = {
            comment: "",
        }
    }

    render(){
        return(
            <div>
                <CommentInput/>
                <Comments/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};


const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsBlock);