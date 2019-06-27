import React, { Component } from 'react';
import './App.css';
import CommentsBlock from "./components/CommentsBlock"
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
        }
    }


    render() {
        return (
            <div className="App">
                <CommentsBlock/>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
