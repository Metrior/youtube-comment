import React, { Component } from 'react';
import SingleComment from './SingleComment';

class MessagesList extends Component{
    // constructor(props) {
    //     super(props);

        // this._global = React.createRef();
    // }
    //
    // scrollToBottom = () => {
    //     const scrollHeight =  this._global.scrollHeight;
    //     const height =  this._global.clientHeight;
    //     const maxScrollTop = scrollHeight - height;
    //     this._global.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    // };
    //
    // componentDidUpdate() {
    //     const lastComment = this.props.messages[this.props.messages.length -1].message;
    //     document.title = lastComment;
    //     this.scrollToBottom();
    // }

    render() {
        const { comments } = this.props;
        const allComments = comments.length > 0 ? comments.map(comment => (
                <SingleComment
                    comment={comment}
                />
            )
        ) : null;

        return (
            <ul>
                {allComments}
            </ul>
        )
    }
}

export default MessagesList;