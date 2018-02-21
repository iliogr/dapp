import React, { Component } from 'react';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing">
                <h1>KeySplit</h1>
                <p>Simple & Secure way to <br/>store your seed words</p>
                <p className="learn-more">Learn More</p>
                <button onClick={() => { this.props.history.push('/terms') }} className="create-account">CREATE ACCOUNT</button>
            </div>
        )
    }
}

export default Main;
