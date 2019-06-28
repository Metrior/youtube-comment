import React, {Component} from "react";

class CommentInput extends Component{

    constructor() {
        super();
        this.state = {
            comment: ""
        };
    }

    onValue = (e) => this.setState({ comment: e.target.value });

    sendComment = (e) => {
        e.preventDefault();
        this.props.sendComment(this.state.comment);
        this.setState({
            comment: ""
        });
    };

    render(){
        return (
            <div className="input-container">
                <form onSubmit={this.sendComment}>
                    <input
                        value={this.state.comment}
                        placeholder="Write a comment..."
                        onChange={this.onValue} type="text"
                    />
                    <button type="submit">SEND</button>
                </form>
            </div>
        )
    }
}

export default CommentInput;