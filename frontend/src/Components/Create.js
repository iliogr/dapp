import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Create extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div className="create">
                <h1>Create Account</h1>
                <p>Your Toshi wallet address<br/>will be your username.</p>
                <div className="fl-row">
                    <div className="fl-offset-15 fl-70">
                        <h4>Create Password</h4>
                        <input placeholder="Password (min 12 characters)" type="password" name="password" />
                    </div>
                </div>


                <center><button onClick={() => { this.props.history.push('/dashboard') }} className="create-account">CREATE ACCOUNT</button></center>
            </div>
        )
    }
}

export default Create;
