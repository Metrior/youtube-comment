import React, {Component} from "react";

class CommentInput extends Component{

    onValue = (e) => this.setState({ message: e.target.value });

    sendComment = (e) => {
        e.preventDefault();
        this.props.sendComment(this.state.message);
        this.setState({
            message: ""
        });
    };

    render(){
        return (
            <div className="input-container">
                <form onSubmit={this.sendComment}>
                    <input
                        value={this.state.comment}
                        placeholder="Write a comment..."
                        // ref={(ref) => this._input = ref}
                        onChange={this.onValue} type="text"
                    />
                    <button type="submit">SEND</button>
                </form>
            </div>
        )
    }
}

export default CommentInput;