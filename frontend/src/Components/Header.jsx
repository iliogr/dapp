import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={require("../Assets/images/header/logo.png")} />
                    <span>KeySplit</span>
                </div>
                <div className="menu">
                    <img src={require("../Assets/images/header/menu.svg")} />
                </div>

            </div>
        )
    }
}

export default Header;
