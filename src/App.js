import React, { Component } from 'react';
import './App.css';
import CommentsBlock from "./components/CommentsBlock"

class App extends Component {

    render() {
        return (
            <div className="App">
                <CommentsBlock/>
            </div>
        );
    }
}

export default App;
